import { Button } from "@/components/Button";
import { BookOpen, Search, Plus, Edit2 } from "lucide-react";

export default function Vocabulary() {
  const words = [
    {
      id: 1,
      term: "On the ball",
      def: "To be quick to understand and react to things.",
      type: "idiom",
    },
    {
      id: 2,
      term: "Cognizant",
      def: "Having knowledge or being aware of.",
      type: "word",
    },
    {
      id: 3,
      term: "Get a foot in the door",
      def: "To enter a business or organization at a low level, but with a chance of being more successful in the future.",
      type: "idiom",
    },
    {
      id: 4,
      term: "Scalability",
      def: "The capacity to be changed in size or scale.",
      type: "word",
    },
    {
      id: 5,
      term: "Debounce",
      def: "Ensuring that time-consuming tasks do not fire so often.",
      type: "word",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto py-8 px-4 space-y-8 relative">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-black tracking-tight flex items-center gap-3 text-text-main">
            <BookOpen size={32} strokeWidth={2.5} className="text-primary" />
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
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            placeholder="Find a word or idiom"
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
            key={word.id}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
            <h3 className="text-xl font-bold text-text-main mb-2">
              {word.term}
            </h3>
            <p className="text-text-muted leading-relaxed mb-6">{word.def}</p>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="size-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors text-text-muted">
                <Edit2 size={18} />
              </button>
            </div>
            <div></div>
          </div>
        ))}

        {/* Add new card */}
        <button className="group flex flex-col items-center justify-center min-h-[200px] border-2 border-dashed border-gray-300 rounded-2xl p-6 hover:border-primary hover:bg-primary/5 transition-all">
          <div className="size-16 rounded-full bg-gray-100 group-hover:bg-primary group-hover:text-text-main flex items-center justify-center transition-colors mb-4 text-text-muted">
            <Plus size={32} />
          </div>
          <span className="font-bold text-text-main">Add New Term</span>
        </button>
      </div>
    </div>
  );
}
