"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import DecryptText from "@/components/animated/TextAnimation";
import { ClippedCard } from "@/components/ClippedCard";

interface JoinFormData {
  leader_email: string;
}

export default function HackathonJoinTeam() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [mounted, setMounted] = useState(false); // SSR guard

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm<JoinFormData>();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!loading && !user) router.push("/signin");
  }, [user, loading, router]);

  const onSubmit = async (data: JoinFormData) => {
    if (!user) return;
    clearErrors();

    try {
      const idToken = await user.getIdToken(true);
      const res = await fetch("/api/v1/team/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        sessionStorage.setItem("teamJustJoined", "true");
        window.location.href = "/hackathon/dashboard?joined=true";
      } else {
        const errorData = await res.json();
        setError("root", {
          message:
            errorData.error ||
            "Team leader not found or team is already finalized. Please check the email and try again.",
        });
      }
    } catch (error) {
      console.error(error);
      setError("root", {
        message: "An error occurred while joining the team.",
      });
    }
  };

  if (!mounted) return null; // prevent SSR hydration mismatch

  return (
    <div className="font-orbitron relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Grid background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #a3ff12 1px, transparent 1px),
              linear-gradient(to bottom, #a3ff12 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            opacity: 0.1,
          }}
        />
      </div>

      {/* Back button */}
      <div className="absolute top-6 left-4 z-10 sm:top-10 sm:left-10">
        <button
          onClick={() => router.push("/hackathon")}
          className="flex cursor-pointer items-center justify-center gap-2 bg-[#b4ff39] px-3 py-2 text-xs font-bold tracking-wider text-black uppercase transition-all hover:brightness-90 disabled:opacity-50 sm:px-4 sm:text-sm"
          style={{
            clipPath:
              "polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)",
            border: "2px solid #b4ff39",
          }}
        >
          Back
        </button>
      </div>

      {/* Centered ClippedCard form */}
      <div className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-6">
        <ClippedCard innerBg="bg-[#101810]">
          <div className="flex w-full flex-col items-center justify-center p-6 sm:p-8">
            <h2 className="mb-6 text-center text-lg font-bold tracking-wider text-white uppercase sm:text-xl md:text-2xl">
              Join Your Hackathon Team
            </h2>
            <form
              className="flex w-full flex-col items-center justify-center space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex w-full flex-col gap-4">
                <div className="flex flex-col w-full">
                  <Label
                    htmlFor="leader_email"
                    className="mb-2 text-sm font-bold tracking-wider text-[#b4ff39] uppercase sm:text-base"
                  >
                    Team Leader Email
                  </Label>
                  <DecryptText
                    text="> Enter valid email to join"
                    startDelayMs={300}
                    trailSize={5}
                    flickerIntervalMs={50}
                    revealDelayMs={100}
                    className="mb-2 text-xs text-white/70 sm:text-sm"
                  />
                  <Input
                    id="leader_email"
                    type="email"
                    {...register("leader_email", {
                      required: "Team leader email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    placeholder="Enter team leader's email"
                    className="w-full rounded-md border border-black bg-white/10 px-4 py-3 text-white transition-all placeholder:text-white/50 focus:ring-2 focus:ring-black focus:outline-none"
                  />
                  {errors.leader_email?.message && (
                    <p className="mt-2 text-xs tracking-wide text-red-500 sm:text-sm">
                      {errors.leader_email?.message}
                    </p>
                  )}
                </div>
              </div>

              {errors.root?.message && (
                <p className="text-sm tracking-wide text-pink-500 sm:text-base">
                  {errors.root?.message}
                </p>
              )}

              <button
                type="submit"
                className="flex w-full cursor-pointer items-center justify-center gap-2 bg-[#b4ff39] px-6 py-3 text-xs font-bold tracking-wider text-black uppercase transition-all hover:brightness-90 disabled:opacity-50 sm:text-sm"
                style={{
                  clipPath:
                    "polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)",
                  border: "2px solid #b4ff39",
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Joining..." : "Join Team"}
              </button>
            </form>
          </div>
        </ClippedCard>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 h-12 w-full bg-gradient-to-t from-black/95 via-black/80 to-transparent" />
    </div>
  );
}
