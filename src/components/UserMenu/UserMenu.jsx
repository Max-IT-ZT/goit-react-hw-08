import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  Menu,
  MenuItem,
  IconButton,
  Avatar,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Logout, Brightness4, Brightness7 } from "@mui/icons-material";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { useTheme } from "../../theme/ThemeContext"; 

export default function UserMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { isDarkMode, toggleTheme } = useTheme(); 
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleClose();
  };

  const handleThemeToggle = () => {
    toggleTheme(); 
  };

  return (
    <div>
      <IconButton onClick={handleClick} color="inherit">
        <Avatar>{user.name[0]}</Avatar>
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem>
          <Avatar sx={{ marginRight: 1 }}>{user.name[0]}</Avatar>
          <ListItemText primary={user.name} />
        </MenuItem>
        <MenuItem onClick={handleThemeToggle}>
          <ListItemIcon>
            {isDarkMode ? <Brightness7 /> : <Brightness4 />}
          </ListItemIcon>
          <ListItemText primary={isDarkMode ? "Light Mode" : "Dark Mode"} />
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </MenuItem>
      </Menu>
    </div>
  );
}
