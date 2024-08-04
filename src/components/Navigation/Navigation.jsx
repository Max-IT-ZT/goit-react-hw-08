import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Box, Button, Typography, styled, Divider } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import clsx from "clsx";
const StyledNavLink = styled(NavLink)(() => ({
  textDecoration: "none",
  "&.active": {
    color: "red",
    fontWeight: "bold",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "12px", // Radius for rounded corners
  padding: "5px 5px",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  color: theme.palette.text.primary,
}));

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <StyledNavLink
        to="/"
        className={({ isActive }) => clsx({ active: isActive })}
      >
        <StyledButton variant="text" startIcon={<HomeIcon />}>
          <Typography>Home</Typography>
        </StyledButton>
      </StyledNavLink>
      <Divider orientation="vertical" flexItem />
      {isLoggedIn && (
        <StyledNavLink
          to="/contacts"
          className={({ isActive }) => clsx({ active: isActive })}
        >
          <StyledButton variant="text" startIcon={<ContactsIcon />}>
            <Typography>Contacts</Typography>
          </StyledButton>
        </StyledNavLink>
      )}
    </Box>
  );
}
