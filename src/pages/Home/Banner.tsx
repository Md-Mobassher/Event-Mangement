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
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import banner from "../../assets/images/banner.png";

interface BannerProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  handleSearch: () => void;
}

const Banner: React.FC<BannerProps> = ({
  searchTerm,
  setSearchTerm,
  category,
  setCategory,
  handleSearch,
}) => {
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
        mt: "-135px",
        px: { lg: 5, md: 3, sm: 2, xs: 1 },
      }}
    >
      {/* Banner Content */}
      <Container
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          direction: "column",
          justifyContent: "space-between",
          alignItems: "end",
          mb: {
            lg: 8,
            md: 7,
            sm: 5,
            xs: 3,
          },
        }}
      >
        <Stack
          width={"100%"}
          direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
          justifyContent="space-between"
          alignItems="center"
          gap={3}
        >
          <Box width={"100%"}>
            <Typography
              variant="h4"
              color="white"
              textAlign={{
                lg: "start",
                md: "start",
                sm: "center",
                xs: "center",
              }}
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
              height: "100px",
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ ml: 1, flex: 1 }}
              />
            </Box>

            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ border: "2px solid lightgray" }}
            />

            <FormControl variant="standard">
              <Select
                defaultValue=""
                displayEmpty
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value="">Categories</MenuItem>
                <MenuItem value={1}>All</MenuItem>
                <MenuItem value={2}>Comedy</MenuItem>
                <MenuItem value={3}>Religious</MenuItem>
                <MenuItem value={4}>Tech</MenuItem>
                <MenuItem value={5}>Health</MenuItem>
                <MenuItem value={6}>Fitness</MenuItem>
                <MenuItem value={7}>Sports</MenuItem>
                <MenuItem value={8}>Education</MenuItem>
              </Select>
            </FormControl>

            <Button variant="contained" color="primary" onClick={handleSearch}>
              Search
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Banner;
