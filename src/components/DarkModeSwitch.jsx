"use client";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const handleChangeTheme = (mode) => {
    setTheme(mode);
  }

  return (
    <div>
      {currentTheme === "dark" ? (
        <MdLightMode
          className="text-2xl cursor-pointer hover:text-amber-500"
          onClick={() => handleChangeTheme("light")}
        />
      ) : (
        <MdDarkMode
          className="text-2xl cursor-pointer hover:text-amber-500"
          onClick={() => handleChangeTheme("dark")}
        />
      )}
    </div>
  );
}
