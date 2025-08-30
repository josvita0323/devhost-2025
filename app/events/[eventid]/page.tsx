import EventRegistration from "@/components/EventRegistration";
import { verifySessionCookie } from "@/firebase/admin";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function EventDetails({
  params,
}: {
  params: Promise<{ eventid: string }>;
}) {
  const { eventid } = await params;

  const cookieStore = await cookies();
  const session = cookieStore.get("__session")?.value;
  if (!session) redirect("/");

  let uid: string;
  try {
    const decoded = await verifySessionCookie(session);
    uid = decoded.uid;
  } catch {
    redirect("/");
  }

  return <EventRegistration eventId={eventid} />;
}
