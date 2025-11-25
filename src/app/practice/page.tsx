"use client";

import { formatRecordingTime } from "@/utils/util";
import { Mic, Calendar, MapPin, Timer } from "lucide-react";
import { useState, useRef } from "react";
import { Input, Label, Textarea } from "../ui";
import { AudioPlayer } from "@/components/AudioPlayer";
import { Button } from "@/components/Button";

export default function Practice() {
  const [currentState, setCurrentState] = useState<
    "idle" | "recording" | "result"
  >("idle");
  const [timer, setTimer] = useState(0);
  const [audioForm, setAudioForm] = useState<{
    time: null | string;
    area: string;
    audioFile: null | File;
  }>({
    time: null,
    area: "",
    audioFile: null,
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackProgress, setPlaybackProgress] = useState(0);
  const [playbackDuration, setPlaybackDuration] = useState("00:00");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const isSimulatedRef = useRef(false);

  const togglePlayback = () => {};

  const handleStart = () => {
    setCurrentState("recording");
    setTimer(0);
  };

  const handleStop = () => {
    setCurrentState("result");
  };

  const handleSubmit = () => {
    setCurrentState("idle");
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-black tracking-tight">
          Practice your spoken English
        </h1>
        <p className="text-text-muted">Read some articles and speak out.</p>
      </div>

      {currentState === "idle" && (
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Speak out!</h2>

            <p className="text-text-muted leading-relaxed">
              You can tell me your daily life, your thoughts.Or you can just
              read some articles that you love.
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

      {currentState === "recording" && (
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              Tell me about an article you like to read and share.
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
                  className="waveform-bar w-2 bg-primary/60 rounded-full h-full"
                  key={i}
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
              {formatRecordingTime(timer)}
            </div>
          </div>
        </div>
      )}

      {currentState === "result" && (
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="text-center space-y-2">
            <h2 className="text-primary text-4xl font-black">Great Job!</h2>
            <p className="text-text-muted">
              Here's your score.Save it to track progress.
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
                  strokeDasharray="65, 100"
                  strokeLinecap="round"
                  strokeWidth="3"
                />
              </svg>
              <span className="text-6xl font-black tracking-tighter text-text-main">
                65
              </span>
            </div>
          </div>

          <div className="bg-background-light p-4 rounded-2xl">
            <Label>Your Answer Simulated Recording</Label>
            <AudioPlayer
              isPlaying={isPlaying}
              onToggle={togglePlayback}
              duration={playbackDuration}
              progress={playbackProgress}
              className="bg-white mt-2"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-background-light flex items-center gap-3">
              <Calendar className="text-text-muted" size={20} />
              <span className="font-medium text-text-main">
                {audioForm.time}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-background-light flex items-center gap-3">
              <MapPin className="text-text-muted" size={20} />
              <span className="font-medium text-text-main">
                {audioForm.area}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                rows={3}
                placeholder="Self-reflection, anything to improve..."
              />
            </div>
            <Button className="w-full h-12 text-base" onClick={handleSubmit}>
              Save to History
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
