import { Outlet } from "react-router";
import Box from "@mui/material/Box";
import AppNavbar from "@dashboard/components/AppNavbar";
import SideMenu from "@dashboard/components/SideMenu";

export default function Dashboard() {
  return (
    <Box sx={{ display: "flex" }}>
      <SideMenu />
      <AppNavbar />
      {/* Main content */}
      <Outlet />
    </Box>
  );
}
