import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

import { AppBar as MuiAppBar, Toolbar, styled } from "@mui/material";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const StyledAppBar = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        {/* Optionally add ThemeToggleButton if needed */}
      </StyledToolbar>
    </StyledAppBar>
  );
}
