export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost'
}

export type AudioPlayerProps = {
  isPlaying: boolean;
  onToggle: () => void;
  progress?: number;
  duration: string;
  className?: string;
}