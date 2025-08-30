"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";

type Props = { eventId: string };

type TeamType = {
  id: string;
  leaderEmail: string;
  members: string[];
  paymentDone: boolean;
  registered?: boolean;
};

export default function EventRegistration({ eventId }: Props) {
  const { user, loading: userLoading } = useAuth();
  const userEmail = user?.email ?? "";

  const [step, setStep] = useState<1 | 2>(1);
  const [leaderEmail, setLeaderEmail] = useState("");
  const [team, setTeam] = useState<TeamType | null>(null);
  const [actionLoading, setActionLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);

  // Utility function to get ID token
  const getIdToken = useCallback(async () => {
    if (!user) return null;
    return await user.getIdToken(true);
  }, [user]);

  useEffect(() => {
    if (userLoading) return;
    const fetchTeam = async () => {
      if (!userEmail) {
        setInitialized(true);
        return;
      }
      try {
        const idToken = await getIdToken();
        if (!idToken) return;

        const res = await fetch(`/api/v1/events/${eventId}/teams/me`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${idToken}`,
          },
        });

        if (res.ok) {
          const data = await res.json();
          if (data.team) {
            setTeam(data.team);
            setStep(2);
          }
        } else {
          const err = await res.json();
          alert(err.error || "Failed to fetch team");
        }
      } catch {
        alert("Unexpected error while fetching team");
      } finally {
        setInitialized(true);
      }
    };
    fetchTeam();
  }, [eventId, userEmail, userLoading, getIdToken]);

  // Generic api handler with alerts
  const handleApiAction = useCallback(
    async (
      url: string,
      options: RequestInit,
      onSuccess: (data: any) => void,
    ) => {
      setActionLoading(true);
      try {
        const idToken = await getIdToken();
        if (!idToken) return;

        options.headers = {
          ...options.headers,
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        };

        const res = await fetch(url, options);
        const data = await res.json();

        if (!res.ok) {
          alert(data.error || "Action failed");
          if (res.status === 401) return;
        } else {
          onSuccess(data);
        }
      } catch {
        alert("Unexpected error");
      } finally {
        setActionLoading(false);
      }
    },
    [getIdToken],
  );

  // Team and member related actions
  const handleCreateTeam = () =>
    handleApiAction(
      `/api/v1/events/${eventId}/teams/create`,
      { method: "POST" },
      (data) => {
        setTeam({
          id: data.teamId,
          leaderEmail: userEmail,
          members: [userEmail],
          paymentDone: false,
        });
        setStep(2);
      },
    );

  const handleJoinTeam = () => {
    if (!leaderEmail.trim()) return;
    handleApiAction(
      `/api/v1/events/${eventId}/teams/join`,
      { method: "POST", body: JSON.stringify({ leaderEmail }) },
      (data) => {
        setTeam({
          id: data.teamId,
          leaderEmail,
          members: [leaderEmail, userEmail],
          paymentDone: false,
        });
        setStep(2);
      },
    );
  };

  const handlePayment = () => {
    if (!team) return;
    handleApiAction(
      `/api/v1/events/${eventId}/teams/${team.id}/pay`,
      { method: "POST" },
      () => setTeam({ ...team, paymentDone: true, registered: true }),
    );
  };

  const handleDisband = () => {
    if (!team) return;
    if (!confirm("Are you sure you want to disband the team?")) return;
    handleApiAction(
      `/api/v1/events/${eventId}/teams/${team.id}`,
      { method: "DELETE" },
      () => {
        setTeam(null);
        setStep(1);
      },
    );
  };

  const handleRemoveMember = (memberEmail: string) => {
    if (!team || memberEmail === userEmail) return;
    if (!confirm(`Remove ${memberEmail} from the team?`)) return;
    handleApiAction(
      `/api/v1/events/${eventId}/teams/${team.id}/remove`,
      {
        method: "POST",
        body: JSON.stringify({ memberEmail }),
      },
      (data) => setTeam({ ...team, members: data.members }),
    );
  };

  if (userLoading || !initialized) {
    return (
      <Card className="mx-auto mt-10 max-w-md">
        <CardContent className="space-y-4 p-4">
          <p>Loading...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mx-auto mt-10 max-w-md">
      <CardContent className="space-y-4 p-4">
        {!userEmail && <p>Please log in to continue.</p>}
        {userEmail && step === 1 && (
          <div className="space-y-2">
            <Button
              className="w-full"
              onClick={handleCreateTeam}
              disabled={actionLoading}
            >
              {actionLoading ? "Creating..." : "Create Team"}
            </Button>
            <div className="flex gap-2">
              <Input
                placeholder="Leader Email"
                value={leaderEmail}
                onChange={(e) => setLeaderEmail(e.target.value)}
                disabled={actionLoading}
              />
              <Button onClick={handleJoinTeam} disabled={actionLoading}>
                {actionLoading ? "Joining..." : "Join Team"}
              </Button>
            </div>
          </div>
        )}
        {userEmail && step === 2 && team && (
          <div className="space-y-2">
            <h2 className="font-bold">Team Dashboard</h2>
            <p>
              <b>Leader:</b> {team.leaderEmail}
            </p>
            <p>
              <b>Members:</b>
            </p>
            <ul className="space-y-1">
              {team.members.map((m) => (
                <li key={m} className="flex items-center justify-between">
                  <span>{m}</span>
                  {team.leaderEmail === userEmail && m !== userEmail && (
                    <Button
                      size="sm"
                      variant="destructive"
                      disabled={actionLoading}
                      onClick={() => handleRemoveMember(m)}
                    >
                      Remove
                    </Button>
                  )}
                </li>
              ))}
            </ul>
            <p>
              <b>Status:</b> {team.registered ? "Registered" : "Pending"}
            </p>
            <p>
              <b>Payment:</b> {team.paymentDone ? "Done" : "Not Done"}
            </p>
            {team.leaderEmail === userEmail && !team.paymentDone && (
              <div className="flex gap-2">
                <Button onClick={handlePayment} disabled={actionLoading}>
                  {actionLoading ? "Processing..." : "Pay Now"}
                </Button>
                <Button
                  variant="destructive"
                  onClick={handleDisband}
                  disabled={actionLoading}
                >
                  {actionLoading ? "Disbanding..." : "Disband Team"}
                </Button>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
