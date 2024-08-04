import { createTheme } from "@mui/material/styles";

// Світла тема
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
  },
  components: {
    // Додаємо глобальні стилі для контейнерів
    MuiContainer: {
      styleOverrides: {
        root: {
          background: "linear-gradient(to right, #f8f9fa, #e9ecef)", // Градієнт для світлої теми
        },
      },
    },
  },
});

// Темна тема
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#121212",
      paper: "#424242",
    },
  },
  components: {
    // Додаємо глобальні стилі для контейнерів
    MuiContainer: {
      styleOverrides: {
        root: {
          background: "linear-gradient(to right, #333, #444)", // Градієнт для темної теми
        },
      },
    },
  },
});
