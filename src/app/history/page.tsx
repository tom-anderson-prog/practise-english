import { Button } from "@/components/Button";
import { Filter } from "lucide-react";

export default function History() {
  const sessions = [
    {
      id: 1,
      title: "Behavioral: Team Conflict",
      date: "Oct 26, 2023",
      score: 92,
      duration: "02:34",
    },
    {
      id: 2,
      title: "Technical: System Design",
      date: "Oct 24, 2023",
      score: 78,
      duration: "04:12",
    },
    {
      id: 3,
      title: 'Intro: "Tell me about yourself"',
      date: "Oct 21, 2023",
      score: 95,
      duration: "01:58",
    },
    {
      id: 4,
      title: "Salary Negotiation",
      date: "Oct 18, 2023",
      score: 65,
      duration: "03:30",
    },
  ];
  return (
    <div className="max-w-5xl mx-auto py-8 px-4 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black tracking-tight text-text-main">
            Practice History
          </h1>
          <p className="text-text-muted">
            Review your past sessions and track improvement.
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="secondary"
            className="rounded-full px-4 h-10 text-sm gap-2">
            Date <Filter size={16} />
          </Button>
          <Button
            variant="secondary"
            className="rounded-full px-4 h-10 text-sm gap-2">
            Score <Filter size={16} />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                  {session.date}
                </span>
                <h3 className="text-lg font-bold leading-tight mt-1 group-hover:text-primary transition-colors text-text-main">
                  {session.title}
                </h3>
              </div>
              <div
                className={`px-3 py-1 rounded-full text-sm font-bold ${
                  session.score >= 80
                    ? "bg-primary/10 text-primary"
                    : session.score > 60
                    ? "bg-yellow-500/10 text-yellow-500"
                    : "bg-red-500/10 text-red-500"
                }`}>
                {session.score}/100
              </div>
            </div>

            <div className="mt-auto pt-6">
              <div></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
