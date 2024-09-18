import React from "react";
import { Box, Button, Typography, Grid, Container } from "@mui/material";
import EventCategoryCard from "../../components/ui/EventCategoryCard";
import physical from "../../assets/images/physical.png";
import hybrid from "../../assets/images/hybrid.png";
import online from "../../assets/images/online.png";
import { Link } from "react-router-dom";

const categoryData = [
  {
    title: "Online Events",
    imageUrl: online,
  },
  {
    title: "Physical Events",
    imageUrl: physical,
  },
  {
    title: "Hybrid Events",
    imageUrl: hybrid,
  },
];

const EventCategoriesSection: React.FC = () => {
  return (
    <Box
      sx={{
        py: { lg: 16, md: 12, sm: 10, xs: 5 },
        px: { lg: 5, md: 3, sm: 2, xs: 1 },
      }}
    >
      <Container>
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          alignItems="start"
        >
          {/* Left Side: Title and Button */}
          <Grid item xs={12} md={5}>
            <Typography variant="h4" fontWeight={600} gutterBottom mb={4}>
              Discover a World of Events Tailored Just for You.
            </Typography>
            <Link to={"/events"}>
              <Button variant="contained" color="primary">
                View all events
              </Button>
            </Link>
          </Grid>

          {/* Right Side: Event Cards */}
          <Grid item xs={12} md={7}>
            <Grid container spacing={4}>
              {/* Card 1 - Online Events */}
              {categoryData.map((item, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <EventCategoryCard
                    imageUrl={item.imageUrl}
                    title={item.title}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default EventCategoriesSection;
