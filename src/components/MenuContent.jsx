import { NavLink, useNavigate } from "react-router";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import { useAuth } from "@dashboard/contexts/AuthContext";

const mainListItems = [
  {
    text: "Overview",
    path: "overview",
    icon: <HomeRoundedIcon />,
  },
];

const secondaryListItems = [
  {
    text: "Settings",
    path: "settings",
    icon: <SettingsRoundedIcon />,
  },
];

export default function MenuContent() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    logout(() => {
      navigate("/");
    });
  };
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {mainListItems.map((item, index) => {
          return (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <NavLink to={item.path}>
                {({ isActive }) => (
                  <ListItemButton selected={isActive}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                )}
              </NavLink>
            </ListItem>
          );
        })}
      </List>

      <List dense>
        {secondaryListItems.map((item, index) => {
          return (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <NavLink to={item.path}>
                {({ isActive }) => (
                  <ListItemButton selected={isActive}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                )}
              </NavLink>
            </ListItem>
          );
        })}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton onClick={handleLogout}>
            <ListItemText primary="Logout" />
            <ListItemIcon>
              <LogoutRoundedIcon fontSize="small" />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
    </Stack>
  );
}
