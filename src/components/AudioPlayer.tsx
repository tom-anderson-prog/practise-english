import { Pause, Play } from "lucide-react";
import { AudioPlayerProps } from "./types";

export const AudioPlayer = ({
  isPlaying,
  onToggle,
  progress = 0,
  duration,
  className = "",
}: AudioPlayerProps) => {
  return (
    <div
      className={`flex items-center gap-3 p-2 rounded-full border transition-colors ${
        isPlaying || progress > 0
          ? "bg-primary/10 border-primary"
          : "bg-background-light border-gray-100"
      } ${className}`}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
        className="size-10 rounded-full cursor-pointer bg-primary text-text-main flex items-center justify-center hover:brightness-110 transition-all shrink-0">
        {isPlaying ? (
          <Pause size={20} fill="currentColor" />
        ) : (
          <Play size={20} fill="currentColor" className="ml-1" />
        )}
      </button>
      <div className="flex-1 h-1.5 bg-gray-200/50 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full"
          style={{
            width: `${Math.min(100, Math.max(0, progress))}%`,
            transition: isPlaying ? "none" : "width 0.2s ease-out",
          }}
        />
      </div>
      <span className="text-xs font-mono font-medium text-text-muted px-2 tabular-nums">
        {duration}
      </span>
    </div>
  );
};
