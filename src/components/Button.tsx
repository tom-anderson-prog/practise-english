import { ButtonProps } from "./types";

export const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-2 font-bold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-primary text-text-main hover:brightness-110 active:scale-95",
    secondary:
      "bg-white dark:bg-surface-dark text-text-main dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800",
    danger:
      "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30",
    ghost:
      "bg-transparent text-text-muted hover:text-text-main hover:bg-gray-100 dark:hover:bg-white/5",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
