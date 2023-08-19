import { IconButton } from "@mui/material";
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
    <div>
      <IconButton className={"hover:bg-none"}>
        {theme === "light" ? (
          <DarkModeIcon
            onClick={() => setTheme("dark")}
            className="text-gra-400 hover:text-gray-900 hover:bg-none"
            fontSize="small"
          />
        ) : (
          <LightModeIcon
            onClick={() => setTheme("light")}
            className="text-white hover:text-amber-400 hover:bg-none"
            fontSize="small"
          />
        )}
      </IconButton>
    </div>
  );
};

export default ThemeButtons;
