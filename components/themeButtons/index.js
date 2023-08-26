import { Button, IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeButtons = () => {
  const { theme, setTheme } = useTheme();
  // we add this to prevent ssr flash for mismatched dark mode
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      className={` rounded-full
      hover:bg-transparent
      ${
        theme === "light"
          ? "text-gray-500 hover:text-black"
          : "text-white hover:text-amber-400"
      }`}
      variant={"text"}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <DarkModeIcon fontSize="small" />
      ) : (
        <LightModeIcon fontSize="small" />
      )}
    </Button>
  );
};

export default ThemeButtons;
