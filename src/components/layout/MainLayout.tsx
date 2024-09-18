import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <Box style={{ minHeight: "100vh", backgroundColor: "white" }}>
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default MainLayout;
