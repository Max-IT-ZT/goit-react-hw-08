import { MdNoAccounts } from "react-icons/md";
import { Typography, Box } from "@mui/material";
import css from "./SearchFalse.module.css";
import { useTheme } from "../../theme/ThemeContext"; // Підключення теми для стилізації

export default function SearchFalse() {
  const { isDarkMode } = useTheme();

  return (
    <Box
      className={css.container}
      sx={{
        backgroundColor: isDarkMode ? "#333" : "#f5f5f5",
        color: isDarkMode ? "#fff" : "#000",
      }}
    >
      <MdNoAccounts size={100} />
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        There is no contact with that name!
      </Typography>
    </Box>
  );
}
