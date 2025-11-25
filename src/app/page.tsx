import Link from "next/link";
import { Mic, Award, Code } from "lucide-react";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)]">
      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="flex justify-center gap-6 mb-8">
            <div className="p-4 bg-primary/20 rounded-2xl text-primary transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <Code />
            </div>
            <div className="p-4 bg-primary/20 rounded-2xl text-primary transform hover:-translate-y-2 transition-transform duration-300">
              <Mic />
            </div>
            <div className="p-4 bg-primary/20 rounded-2xl text-primary transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <Award />
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-text-main leading-[1.1]">
            Master English for <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-green-600">
              My Better Career.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            Don't worry making mistakes.Practice makes perfect.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/practice">
              <Button className="h-14 px-10 text-lg rounded-full shadow-xl shadow-primary/20 hover:shadow-primary/40">
                Start Practice
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8 bg-white/50 dark:bg-black/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-text-muted">
          <p>© 2025 DevSpeak. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-main transition-colors">
              Github
            </a>
            <a href="#" className="hover:text-main transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
