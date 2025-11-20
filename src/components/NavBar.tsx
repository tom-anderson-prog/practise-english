"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./Button";
import { Code } from "lucide-react";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const pathname = usePathname();
  const navItems = [
    {
      id: 1,
      name: "Practice",
      path: "/practice",
    },
    {
      id: 2,
      name: "History",
      path: "/history",
    },
    {
      id: 3,
      name: "Vocabulary",
      path: "/vocabulary",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8 py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex items-center justify-center size-8 rounded-lg bg-primary text-text-main gourp-hover:scale-105 transition-transform">
            <Code size={20} strokeWidth={3} />
          </div>
          <h2 className="text-xl font-bold tracking-tight">Practice English</h2>
        </Link>
        <div className="flex items-center gap-8">
          {isLoggedIn && (
            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  className={`text-sm font-medium rounded-xl px-2 py-2 transition-colors ${
                    pathname.startsWith(item.path)
                      ? "text-text-main dark:text-white"
                      : "text-text-muted hover:text-text-main hover:bg-primary/20 dark:hover:text-white transition-all duration-300"
                  } `}
                  href={item.path}>
                  {item.name}
                </Link>
              ))}
            </nav>
          )}

          {isLoggedIn ? (
            <Link
              href="/app/profile"
              className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-gray-700">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold leading-none">Tommy Anderson</p>
                <p className="text-xs text-text-muted">Developer</p>
              </div>
              <div
                className="size-10 rounded-full bg-gray-200 bg-cover bg-center ring-2 ring-white dark:ring-gray-800"
                style={{ backgroundImage: "url('https://picsum.photos/seed/alex/200/200')" }}
              />
            </Link>
          ) : (
            <Button variant="ghost">Login</Button>
          )}
        </div>
      </div>
    </header>
  );
};
