import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

export type TNavItemsData = {
  title: string;
  url: string;
};

export const navItemsData = [
  {
    title: "Discover",
    url: "/",
  },
  {
    title: "About Us",
    url: "/about",
  },
  {
    title: "FAQs",
    url: "/faqs",
  },
  {
    title: "Contact Us",
    url: "/contact",
  },
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isMediumAndUp = useMediaQuery(theme.breakpoints.up("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const drawerContent = (
    <Box sx={{ width: 280 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
        <IconButton onClick={handleDrawerClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Stack spacing={2} sx={{ p: 2 }} gap={"5px"}>
        {navItemsData.map((item: TNavItemsData, index) => (
          <Typography
            key={index}
            component={Link}
            to={item.url}
            sx={{
              fontWeight: 500,
              color: "primary.main",
              fontSize: "16px",
              textDecoration: "none",
            }}
          >
            {item.title}
          </Typography>
        ))}
        <Typography
          component={Link}
          to={"/login"}
          sx={{
            fontWeight: 500,
            color: "primary.main",
            fontSize: "16px",
            textDecoration: "none",
          }}
        >
          Log in
        </Typography>
        <Button variant="contained" color="primary">
          Sign up
        </Button>
      </Stack>
    </Box>
  );

  return (
    <Box
      sx={{
        px: {
          lg: 5,
          md: 4,
          sm: 2,
          xs: 1,
        },
        py: {
          lg: 3,
          md: 2,
          sm: 1,
          xs: 1,
        },
      }}
    >
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: 3,
          px: {
            lg: 2,
            md: 2,
            sm: 1,
            xs: "5px",
          },
        }}
        elevation={0}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ p: 2 }}
        >
          <Link to={"/"}>
            <img src={logo} alt="logo" style={{ height: 40 }} />
          </Link>

          {isMobile && (
            <IconButton edge="start" color="inherit" onClick={handleDrawerOpen}>
              <MenuIcon
                sx={{ color: "primary.main", width: "35px", height: "35px" }}
              />
            </IconButton>
          )}
          {!isMobile ? (
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="space-between"
              gap={1}
            >
              {navItemsData.map((item: TNavItemsData, index) => (
                <Typography
                  key={index}
                  component={Link}
                  to={item.url}
                  sx={{
                    fontWeight: 500,
                    color: "primary.main",
                    fontSize: "16px",
                    textDecoration: "none",
                  }}
                >
                  {item.title}
                </Typography>
              ))}
            </Stack>
          ) : null}
          {isMediumAndUp && (
            <Stack
              direction="row"
              gap={3}
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                component={Link}
                to={"/login"}
                sx={{
                  fontWeight: 500,
                  color: "primary.main",
                  fontSize: "16px",
                  textDecoration: "none",
                }}
              >
                Log in
              </Typography>
              <Button variant="contained" color="primary">
                Sign up
              </Button>
            </Stack>
          )}
        </Stack>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default Navbar;
