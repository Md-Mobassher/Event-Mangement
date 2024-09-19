import { Box, Container, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        py: { lg: 6, md: 5, sm: 4, xs: 3 },
        px: { lg: 5, md: 3, sm: 2, xs: 1 },
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: { xs: 4, md: 2 },
          }}
        >
          {/* Left section - Logo and description */}
          <Box>
            <Typography color="white" variant="h5" sx={{ fontWeight: "bold" }}>
              rendezvous
            </Typography>
            <Typography color="white" sx={{ mt: 1 }}>
              Your Personal Event Sherpa: Curating Awesome, One Click at a Time.
            </Typography>
          </Box>

          {/* Middle section - Features */}
          <Box>
            <Typography color="white" variant="h6" sx={{ fontWeight: "bold" }}>
              Feature
            </Typography>
            <Stack spacing={1} sx={{ mt: 2 }}>
              <Typography color="white">Events discovery</Typography>
              <Typography color="white">Ticketing</Typography>
            </Stack>
          </Box>

          {/* Middle section - Company */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Company
            </Typography>
            <Stack spacing={1} sx={{ mt: 2 }}>
              <Typography color="white">About us</Typography>
              <Typography color="white">FAQs</Typography>
              <Typography color="white">Careers</Typography>
              <Typography color="white">Support</Typography>
            </Stack>
          </Box>

          {/* Right section - Contact */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }} color="white">
              Contact us
            </Typography>
            <Stack spacing={1} sx={{ mt: 2 }}>
              <Typography color="white">info@events.com</Typography>
              <Typography color="white">+234 701 345 6789</Typography>
              <Typography color="white">
                Race Course, 8/9 Marina,
                <br />
                Onikan, Lagos Lagos,
                <br />
                4aa Force Rd, Lagos Island 102273, Lagos
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
