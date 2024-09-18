import { Box, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#4b296b", // Adjust color to match your theme
        color: "white",
        py: 6, // Padding top and bottom
        px: 4, // Padding left and right
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack vertically on small screens, horizontally on larger screens
          justifyContent: "space-between", // Distribute space between items
          gap: { xs: 4, md: 0 }, // Add space between items on small screens
        }}
      >
        {/* Left section - Logo and description */}
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            rendezvous
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Your Personal Event Sherpa: Curating Awesome, One Click at a Time.
          </Typography>
        </Box>

        {/* Middle section - Features */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Feature
          </Typography>
          <Stack spacing={1} sx={{ mt: 2 }}>
            <Typography>Events discovery</Typography>
            <Typography>Ticketing</Typography>
          </Stack>
        </Box>

        {/* Middle section - Company */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Company
          </Typography>
          <Stack spacing={1} sx={{ mt: 2 }}>
            <Typography>About us</Typography>
            <Typography>FAQs</Typography>
            <Typography>Careers</Typography>
            <Typography>Support</Typography>
          </Stack>
        </Box>

        {/* Right section - Contact */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Contact us
          </Typography>
          <Stack spacing={1} sx={{ mt: 2 }}>
            <Typography>info@events.com</Typography>
            <Typography>+234 701 345 6789</Typography>
            <Typography>
              Race Course, 8/9 Marina,
              <br />
              Onikan, Lagos Lagos,
              <br />
              4aa Force Rd, Lagos Island 102273, Lagos
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
