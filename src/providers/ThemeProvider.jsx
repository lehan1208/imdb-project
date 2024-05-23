"use client";
import { ThemeProvider } from "next-themes";

export default function NextThemeProvider({ children }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div
        className="next-theme-provider text-gray-700 dark:text-gray-200 dark:bg-gray-700
      min-h-screen select-none transition-colors duration-300"
      >
        {children}
      </div>
    </ThemeProvider>
  );
}
