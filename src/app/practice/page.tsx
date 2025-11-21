import { Mic } from "lucide-react";

export default function Practice() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-black tracking-tight">Practice your spoken English</h1>
        <p className="text-text-muted">Read some articles and speak out.</p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-8">
        <h2 className="text-2xl font-bold">Speak out!</h2>

        <p className="text-text-muted leading-relaxed">
          You can tell me your daily life, your thoughts.Or you can just read some articles that you
          love.
        </p>
      </div>

      <div className="flex justify-center py-8 bg-background-light rounded-2xl">
        <button className="size-24 rounded-full bg-primary text-text-main flex items-center justify-center hover:scale-105 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group">
          <Mic size={40} className="group-hover:animate-bounce" />
        </button>
      </div>
    </div>
  );
}
