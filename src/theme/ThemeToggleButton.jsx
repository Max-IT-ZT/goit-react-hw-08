// ThemeToggleButton.js
import { IconButton } from "@mui/material";
import { useTheme } from "./ThemeContext";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const ThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <IconButton onClick={toggleTheme}>
      {isDarkMode ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default ThemeToggleButton;
