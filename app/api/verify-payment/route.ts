import { NextResponse } from "next/server";
import crypto from "crypto";
import { adminDb } from "@/lib/firebaseAdmin";

export async function POST(req: Request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, amount } = await req.json();

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json({ error: "Missing params" }, { status: 400 });
    }

    const generated_signature = crypto
      .createHmac("sha256",process.env.RAZORPAY_KEY_SECRET! )
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generated_signature !== razorpay_signature) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    // ✅ Verified → store in Firestore
    await adminDb.collection("payments").doc(razorpay_payment_id).set({
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      status: "paid",
      amount: amount || null,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("Verify-payment error:", err);
    return NextResponse.json({ error: err.message || String(err) }, { status: 500 });
  }
}

//updated 2.0
import { NextResponse } from "next/server";
import crypto from "crypto";
import { adminDb } from "@/lib/firebaseAdmin";

export async function POST(req: Request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, amount, userId } = await req.json();

    // Enhanced validation
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json({ error: "Missing required parameters" }, { status: 400 });
    }

    // Verify signature
    const generated_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generated_signature !== razorpay_signature) {
      console.error("Signature verification failed:", {
        generated: generated_signature,
        received: razorpay_signature
      });
      return NextResponse.json({ error: "Payment verification failed" }, { status: 400 });
    }

    // Check if payment already exists (prevent duplicate processing)
    const existingPayment = await adminDb.collection("payments").doc(razorpay_payment_id).get();
    
    if (existingPayment.exists) {
      console.log("Payment already processed:", razorpay_payment_id);
      return NextResponse.json({ 
        ok: true, 
        message: "Payment already processed",
        paymentId: razorpay_payment_id 
      });
    }

    // Prepare payment data
    const paymentData = {
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      status: "paid",
      amount: amount || null,
      userId: userId || null, // Include user information
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      verifiedAt: new Date().toISOString(),
    };

    // Use transaction for data consistency
    await adminDb.runTransaction(async (transaction) => {
      // Store payment record
      const paymentRef = adminDb.collection("payments").doc(razorpay_payment_id);
      transaction.set(paymentRef, paymentData);

      // Update order status if you have orders collection
      const orderRef = adminDb.collection("orders").doc(razorpay_order_id);
      const orderDoc = await transaction.get(orderRef);
      
      if (orderDoc.exists) {
        transaction.update(orderRef, {
          status: "paid",
          paymentId: razorpay_payment_id,
          paidAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      }

      // If this is for hackathon registration, update user registration status
      if (userId) {
        const userRef = adminDb.collection("users").doc(userId);
        const userDoc = await transaction.get(userRef);
        
        if (userDoc.exists) {
          transaction.update(userRef, {
            registrationStatus: "paid",
            paymentId: razorpay_payment_id,
            registeredAt: new Date().toISOString(),
          });
        }
      }
    });

    console.log("Payment verified and stored successfully:", razorpay_payment_id);

    return NextResponse.json({ 
      ok: true, 
      message: "Payment verified successfully",
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id
    });

  } catch (err: any) {
    console.error("Verify-payment error:", err);
    
    // More specific error handling
    if (err.code === 'permission-denied') {
      return NextResponse.json({ error: "Database permission denied" }, { status: 403 });
    }
    
    if (err.code === 'unavailable') {
      return NextResponse.json({ error: "Database temporarily unavailable" }, { status: 503 });
    }

    return NextResponse.json({ 
      error: "Payment verification failed",
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    }, { status: 500 });
  }
}