import {
  Typography,
  Button,
  Box,
  Container,
  InputBase,
  MenuItem,
  FormControl,
  Select,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import banner from "../../assets/images/banner.png";

const Banner = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
        position: "absolute",
        top: 0,
      }}
    >
      {/* Banner Content */}
      <Container
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          direction: "row",
          justifyContent: "space-evenly",
          alignItems: "end",
          mb: {
            lg: 10,
            md: 8,
            sm: 6,
            xs: 4,
          },
        }}
      >
        <Stack
          direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            gap: {
              lg: 10,
              md: 5,
              sm: 2,
              xs: 2,
            },
          }}
        >
          <Box width={"100%"}>
            <Typography
              variant="h4"
              color="white"
              align="center"
              sx={{ fontWeight: 700 }}
            >
              Ready to Rock? Discover the <br />
              Hottest Events Here — Your <br />
              Calendar's New Best Friend!
            </Typography>
          </Box>

          {/* Search Bar */}
          <Stack
            direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
            sx={{
              backgroundColor: "white",
              py: 2,
              px: 3,
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: 3,
              gap: {
                lg: 4,
                md: 3,
                sm: 2,
                xs: 1,
              },
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: 2,
                p: 1,
              }}
            >
              <SearchIcon sx={{ color: "grey.500" }} />
              <InputBase
                placeholder="Search for an event"
                sx={{ ml: 1, flex: 1 }}
              />
            </Box>

            <FormControl variant="outlined">
              <Select defaultValue="" displayEmpty>
                <MenuItem value="">
                  <em>Categories</em>
                </MenuItem>
                <MenuItem value={1}>Music</MenuItem>
                <MenuItem value={2}>Sports</MenuItem>
                <MenuItem value={3}>Tech</MenuItem>
              </Select>
            </FormControl>

            <Button variant="contained" color="primary">
              Search
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Banner;
