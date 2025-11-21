import React from "react";
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  Link,
} from "react-router-dom";
import {
  Code,
  Mic,
  Award,
  Menu,
  X,
  Home,
  History as HistoryIcon,
  BookOpen,
  User,
  LogOut,
  Play,
  Pause,
  Calendar,
  MapPin,
  Plus,
  Volume2,
  Edit2,
  Trash2,
  Lightbulb,
  Search,
  Filter,
  Flame,
  Languages,
} from "lucide-react";

// --- Components ---

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger" | "ghost";
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-2 font-bold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-primary text-text-main hover:brightness-110 active:scale-95",
    secondary:
      "bg-white text-text-main border border-gray-200 hover:bg-gray-50",
    danger: "bg-red-50 text-red-600 hover:bg-red-100",
    ghost:
      "bg-transparent text-text-muted hover:text-text-main hover:bg-gray-100",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}>
      {children}
    </button>
  );
};

// --- Layouts ---

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/80 backdrop-blur-md border-b border-gray-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8 py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex items-center justify-center size-8 rounded-lg bg-primary text-text-main group-hover:scale-105 transition-transform">
            <Code size={20} strokeWidth={3} />
          </div>
          <h2 className="text-xl font-bold tracking-tight">DevSpeak</h2>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {!isLanding && (
            <nav className="flex items-center gap-6">
              <Link
                to="/app/practice"
                className={`text-sm font-medium transition-colors ${
                  location.pathname.includes("practice")
                    ? "text-text-main"
                    : "text-text-muted hover:text-text-main"
                }`}>
                Practice
              </Link>
              <Link
                to="/app/history"
                className={`text-sm font-medium transition-colors ${
                  location.pathname.includes("history")
                    ? "text-text-main"
                    : "text-text-muted hover:text-text-main"
                }`}>
                History
              </Link>
              <Link
                to="/app/vocab"
                className={`text-sm font-medium transition-colors ${
                  location.pathname.includes("vocab")
                    ? "text-text-main"
                    : "text-text-muted hover:text-text-main"
                }`}>
                Word Bank
              </Link>
            </nav>
          )}

          <div className="flex items-center gap-3">
            {isLanding ? (
              <>
                <Link
                  to="/app/practice"
                  className="text-sm font-bold text-text-muted hover:text-text-main">
                  Login
                </Link>
                <Link to="/app/practice">
                  <Button>Start Practicing</Button>
                </Link>
              </>
            ) : (
              <Link
                to="/app/profile"
                className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-bold leading-none">Alex Johnson</p>
                  <p className="text-xs text-text-muted">Developer</p>
                </div>
                <div
                  className="size-10 rounded-full bg-gray-200 bg-cover bg-center ring-2 ring-white"
                  style={{
                    backgroundImage:
                      'url("https://picsum.photos/seed/alex/200/200")',
                  }}
                />
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-text-main"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background-light border-b border-gray-200 p-4 flex flex-col gap-4 shadow-lg">
          {!isLanding && (
            <>
              <Link
                to="/app/practice"
                onClick={() => setIsOpen(false)}
                className="text-base font-medium p-2 hover:bg-gray-100 rounded-lg">
                Practice
              </Link>
              <Link
                to="/app/history"
                onClick={() => setIsOpen(false)}
                className="text-base font-medium p-2 hover:bg-gray-100 rounded-lg">
                History
              </Link>
              <Link
                to="/app/vocab"
                onClick={() => setIsOpen(false)}
                className="text-base font-medium p-2 hover:bg-gray-100 rounded-lg">
                Word Bank
              </Link>
              <Link
                to="/app/profile"
                onClick={() => setIsOpen(false)}
                className="text-base font-medium p-2 hover:bg-gray-100 rounded-lg">
                Profile
              </Link>
              <div className="h-px bg-gray-200 my-2" />
            </>
          )}
          <Link
            to={isLanding ? "/app/practice" : "/"}
            onClick={() => setIsOpen(false)}>
            <Button className="w-full">
              {isLanding ? "Start Practicing" : "Log Out"}
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
};

// --- Pages ---

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)]">
      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="flex justify-center gap-6 mb-8">
            <div className="p-4 bg-primary/20 rounded-2xl text-primary transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <Code size={32} />
            </div>
            <div className="p-4 bg-primary/20 rounded-2xl text-primary transform hover:-translate-y-2 transition-transform duration-300">
              <Mic size={32} />
            </div>
            <div className="p-4 bg-primary/20 rounded-2xl text-primary transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <Award size={32} />
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-text-main leading-[1.1]">
            Master English for your <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-600">
              Remote Career.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            Practice real developer interview questions, build your technical
            vocabulary, and get instant feedback to land your dream remote job.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/app/practice">
              <Button className="h-14 px-10 text-lg rounded-full shadow-xl shadow-primary/20 hover:shadow-primary/40">
                Start Your Free Session
              </Button>
            </Link>
            <Button variant="ghost" className="h-14 px-10 text-lg">
              How it Works
            </Button>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 py-12 bg-white/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-text-muted">
          <p>© 2024 DevSpeak. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-text-main transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-text-main transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-text-main transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const PracticePage = () => {
  const [state, setState] = React.useState<"idle" | "recording" | "result">(
    "idle"
  );
  const [timer, setTimer] = React.useState(0);

  React.useEffect(() => {
    let interval: number;
    if (state === "recording") {
      interval = window.setInterval(() => setTimer((t) => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [state]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleStart = () => {
    setState("recording");
    setTimer(0);
  };

  const handleStop = () => {
    setState("result");
  };

  const handleReset = () => {
    setState("idle");
    setTimer(0);
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-black tracking-tight">
          Practice Question
        </h1>
        <p className="text-text-muted">
          Read the question below and record your answer.
        </p>
      </div>

      {state === "idle" && (
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              Tell me about a challenging project you've worked on.
            </h2>
            <p className="text-text-muted leading-relaxed">
              Describe the project, your specific role, the challenges you
              faced, how you overcame them, and what the outcome was. Focus on
              using clear, concise language and professional vocabulary.
            </p>
          </div>

          <div className="flex justify-center py-8 bg-background-light rounded-2xl">
            <button
              onClick={handleStart}
              className="size-24 rounded-full bg-primary text-text-main flex items-center justify-center hover:scale-105 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group">
              <Mic size={40} className="group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      )}

      {state === "recording" && (
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              Tell me about a challenging project you've worked on.
            </h2>
            <p className="text-text-muted">Recording in progress...</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 bg-background-light p-6 rounded-2xl">
            <button
              onClick={handleStop}
              className="size-20 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors hover:scale-105 shadow-lg shadow-red-500/20">
              <div className="size-8 bg-white rounded-md" />
            </button>

            <div className="flex items-center gap-1 h-16">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="waveform-bar w-2 bg-primary/60 rounded-full h-full"
                />
              ))}
              {[...Array(5)].map((_, i) => (
                <div
                  key={`b-${i}`}
                  className="waveform-bar w-2 bg-primary/40 rounded-full h-full"
                  style={{ animationDelay: `-${0.2 * i}s` }}
                />
              ))}
            </div>

            <div className="text-3xl font-mono font-bold text-text-main tabular-nums">
              {formatTime(timer)}
            </div>
          </div>
        </div>
      )}

      {state === "result" && (
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="text-center space-y-2">
            <h2 className="text-primary text-4xl font-black">Great Job!</h2>
            <p className="text-text-muted">
              Here's your score. Save it to track progress.
            </p>
          </div>

          <div className="flex justify-center py-6">
            <div className="relative size-48 flex items-center justify-center">
              <svg
                className="absolute inset-0 size-full -rotate-90"
                viewBox="0 0 36 36">
                <path
                  className="text-gray-100"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <path
                  className="text-primary drop-shadow-[0_0_10px_rgba(19,236,91,0.5)]"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray="85, 100"
                  strokeLinecap="round"
                  strokeWidth="3"
                />
              </svg>
              <span className="text-6xl font-black tracking-tighter text-text-main">
                85
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-background-light flex items-center gap-3">
              <Calendar className="text-text-muted" size={20} />
              <span className="font-medium text-text-main">
                {new Date().toLocaleDateString()}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-background-light flex items-center gap-3">
              <MapPin className="text-text-muted" size={20} />
              <span className="font-medium text-text-main">
                San Francisco, USA
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2 text-text-main">
                Notes
              </label>
              <textarea
                className="w-full rounded-xl border-gray-200 bg-background-light p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none text-text-main"
                rows={3}
                placeholder="Self-reflection, areas to improve..."
              />
            </div>
            <Button className="w-full h-12 text-base" onClick={handleReset}>
              Save to History
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

const HistoryPage = () => {
  // Added dummy audio URLs for demonstration
  const sessions = [
    {
      id: 1,
      title: "Behavioral: Team Conflict",
      date: "Oct 26, 2023",
      score: 92,
      duration: "02:34",
      color: "text-green-500",
      bg: "bg-green-500/10",
      audioUrl:
        "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3",
    },
    {
      id: 2,
      title: "Technical: System Design",
      date: "Oct 24, 2023",
      score: 78,
      duration: "04:12",
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
      audioUrl:
        "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3",
    },
    {
      id: 3,
      title: 'Intro: "Tell me about yourself"',
      date: "Oct 21, 2023",
      score: 95,
      duration: "01:58",
      color: "text-primary",
      bg: "bg-primary/10",
      audioUrl:
        "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3",
    },
    {
      id: 4,
      title: "Salary Negotiation",
      date: "Oct 18, 2023",
      score: 65,
      duration: "03:30",
      color: "text-red-500",
      bg: "bg-red-500/10",
      audioUrl:
        "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3",
    },
  ];

  const [playingId, setPlayingId] = React.useState<number | null>(null);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const togglePlay = (id: number, url: string) => {
    if (playingId === id) {
      // Toggle pause/play for current
      if (audioRef.current) {
        if (audioRef.current.paused) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
          setPlayingId(null); // Reset UI to pause state
        }
      }
    } else {
      // Stop previous if exists
      if (audioRef.current) {
        audioRef.current.pause();
      }
      // Start new
      const audio = new Audio(url);
      audio.onended = () => setPlayingId(null);
      audio.play().catch((e) => console.error("Playback failed", e));
      audioRef.current = audio;
      setPlayingId(id);
    }
  };

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

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
                className={`px-3 py-1 rounded-full text-sm font-bold ${session.bg} ${session.color}`}>
                {session.score}/100
              </div>
            </div>

            <div className="mt-auto pt-6">
              <div
                className={`flex items-center gap-3 p-2 rounded-full border transition-colors ${
                  playingId === session.id
                    ? "bg-primary/10 border-primary"
                    : "bg-background-light border-gray-100"
                }`}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay(session.id, session.audioUrl);
                  }}
                  className="size-10 rounded-full bg-primary text-text-main flex items-center justify-center hover:brightness-110 transition-all">
                  {playingId === session.id ? (
                    <Pause size={20} fill="currentColor" />
                  ) : (
                    <Play size={20} fill="currentColor" className="ml-1" />
                  )}
                </button>
                <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  {/* Simple visual for playing state */}
                  <div
                    className={`h-full bg-primary rounded-full transition-all duration-500 ${
                      playingId === session.id ? "w-full animate-pulse" : "w-0"
                    }`}
                  />
                </div>
                <span className="text-xs font-mono font-medium text-text-muted px-2">
                  {session.duration}
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Empty State Placeholder */}
        <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[240px] hover:bg-gray-50 transition-colors cursor-pointer">
          <div className="size-16 rounded-full bg-gray-100 flex items-center justify-center text-text-muted mb-4">
            <Mic size={32} />
          </div>
          <h3 className="font-bold text-lg text-text-main">
            Record New Session
          </h3>
          <p className="text-sm text-text-muted max-w-[200px]">
            Start a new practice session to add to your history.
          </p>
        </div>
      </div>
    </div>
  );
};

const VocabPage = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const words = [
    {
      term: "On the ball",
      def: "To be quick to understand and react to things.",
    },
    { term: "Cognizant", def: "Having knowledge or being aware of." },
    {
      term: "Get a foot in the door",
      def: "To enter a business or organization at a low level, but with a chance of being more successful in the future.",
    },
    {
      term: "Scalability",
      def: "The capacity to be changed in size or scale.",
    },
    {
      term: "Debounce",
      def: "Ensuring that time-consuming tasks do not fire so often.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 space-y-8 relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-black tracking-tight flex items-center gap-3 text-text-main">
            <BookOpen className="text-primary" size={32} strokeWidth={2.5} />
            My Word Bank
          </h1>
          <p className="text-text-muted">
            Keep track of technical terms and idioms.
          </p>
        </div>
        <div className="w-full md:w-64 space-y-2">
          <div className="flex justify-between text-sm font-medium text-text-main">
            <span>Goal Progress</span>
            <span>150/200</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-3/4 rounded-full" />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
            size={20}
          />
          <input
            type="text"
            placeholder="Find a word or idiom..."
            className="w-full h-12 pl-12 pr-4 rounded-full bg-white border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none transition-all shadow-sm text-text-main"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
          <Button
            variant="primary"
            className="h-12 px-6 rounded-full bg-primary/20 text-text-main hover:bg-primary/30 border-transparent">
            All
          </Button>
          <Button
            variant="secondary"
            className="h-12 px-6 rounded-full whitespace-nowrap">
            Words
          </Button>
          <Button
            variant="secondary"
            className="h-12 px-6 rounded-full whitespace-nowrap">
            Idioms
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {words.map((word, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-text-main">{word.term}</h3>
            </div>
            <p className="text-text-muted leading-relaxed mb-6">{word.def}</p>
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="size-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors text-text-muted">
                <Volume2 size={18} />
              </button>
              <button
                className="size-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors text-text-muted"
                onClick={() => setIsModalOpen(true)}>
                <Edit2 size={18} />
              </button>
            </div>
          </div>
        ))}

        {/* Add New Card */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="group flex flex-col items-center justify-center min-h-[200px] border-2 border-dashed border-gray-300 rounded-2xl p-6 hover:border-primary hover:bg-primary/5 transition-all">
          <div className="size-16 rounded-full bg-gray-100 group-hover:bg-primary group-hover:text-text-main flex items-center justify-center transition-colors mb-4 text-text-muted">
            <Plus size={32} />
          </div>
          <span className="font-bold text-text-main">Add New Term</span>
        </button>
      </div>

      {/* FAB for mobile */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="md:hidden fixed bottom-6 right-6 size-14 bg-primary text-text-main rounded-full shadow-xl flex items-center justify-center z-40 hover:scale-110 transition-transform">
        <Plus size={28} />
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-lg rounded-3xl p-8 shadow-2xl space-y-6 animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-text-main">Edit Term</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-text-main">
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2 text-text-main">
                  Term / Phrase
                </label>
                <input
                  defaultValue="On the ball"
                  className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-background-light focus:ring-2 focus:ring-primary focus:outline-none text-text-main"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-text-main">
                  Definition / Meaning
                </label>
                <textarea
                  rows={4}
                  defaultValue="To be quick to understand and react to things."
                  className="w-full p-4 rounded-xl border border-gray-200 bg-background-light focus:ring-2 focus:ring-primary focus:outline-none resize-none text-text-main"
                />
              </div>
            </div>

            <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-4">
              <Button
                variant="danger"
                className="w-full sm:w-auto gap-2 bg-transparent hover:bg-red-50">
                <Trash2 size={18} /> Delete
              </Button>
              <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3">
                <Button
                  variant="secondary"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full sm:w-auto">
                  Cancel
                </Button>
                <Button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full sm:w-auto">
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ProfilePage = () => {
  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
        {/* Sidebar Profile */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-gray-100 text-center space-y-4">
            <div
              className="size-32 mx-auto rounded-full bg-gray-200 ring-4 ring-background-light bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://picsum.photos/seed/alex/300/300")',
              }}
            />
            <div>
              <h2 className="text-xl font-bold text-text-main">Alex Johnson</h2>
              <p className="text-text-muted">Member since Jan 2024</p>
            </div>
            <Button
              variant="secondary"
              className="w-full rounded-xl h-10 text-sm">
              Edit Profile
            </Button>
          </div>

          <div className="hidden lg:block space-y-2">
            <Link
              to="#"
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white font-medium border border-gray-100 hover:border-primary transition-colors text-text-main">
              <User size={20} /> Account Settings
            </Link>
            <Link
              to="#"
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white font-medium border border-gray-100 hover:border-primary transition-colors text-text-main">
              <Award size={20} /> Certificates
            </Link>
            <Link
              to="/"
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white font-medium text-red-500 border border-gray-100 hover:bg-red-50 transition-colors">
              <LogOut size={20} /> Log Out
            </Link>
          </div>
        </div>

        {/* Main Stats */}
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-black tracking-tight mb-6 text-text-main">
              My Progress
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 space-y-2 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-2 text-orange-500 font-bold">
                  <Flame size={24} fill="currentColor" />
                  Day Streak
                </div>
                <p className="text-5xl font-black text-primary">21</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 space-y-2 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-2 text-teal-500 font-bold">
                  <Mic size={24} />
                  Recordings
                </div>
                <p className="text-5xl font-black text-primary">148</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 space-y-2 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-2 text-purple-500 font-bold">
                  <Languages size={24} />
                  Words Learned
                </div>
                <p className="text-5xl font-black text-primary">312</p>
              </div>
            </div>
          </div>

          {/* Activity Graph Placeholder */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-text-main">
                Weekly Activity
              </h3>
              <select className="bg-background-light border-none rounded-lg text-sm font-bold px-3 py-1 outline-none text-text-main">
                <option>This Week</option>
                <option>Last Week</option>
              </select>
            </div>
            <div className="h-48 flex items-end justify-between gap-2">
              {[30, 45, 25, 60, 80, 50, 40].map((h, i) => (
                <div
                  key={i}
                  className="w-full bg-primary/20 rounded-t-xl hover:bg-primary transition-colors relative group"
                  style={{ height: `${h}%` }}>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {h}m
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs font-bold text-text-muted uppercase">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-background-light text-text-main font-display">
      <Navbar />
      <div className="animate-in fade-in duration-500">
        <Routes>
          <Route path="/" element={<Navigate to="/app/practice" replace />} />
          <Route path="practice" element={<PracticePage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="vocab" element={<VocabPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </div>
  );
};

// --- Main App Component ---

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <LandingPage />
            </>
          }
        />
        <Route path="/app/*" element={<AppLayout />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
