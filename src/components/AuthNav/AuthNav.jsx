import { NavLink } from "react-router-dom";
// import { Link } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
}));

const StyledLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.primary,
  "&.active": {
    color: theme.palette.primary.main,
  },
}));

export default function AuthNav() {
  return (
    <Container>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </Container>
  );
}
