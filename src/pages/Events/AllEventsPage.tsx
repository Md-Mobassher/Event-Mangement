import { Box, Container, Pagination, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchAllEvents } from "../../services/api";
import EventCard from "../../components/ui/EventCard";
import { Event } from "../../type";
import { useLocation } from "react-router-dom";

const AllEventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber] = useState(1);
  const [limit] = useState(6);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);

  // Fetch all events initially
  useEffect(() => {
    setLoading(true);
    fetchAllEvents(pageNumber, limit)
      .then((response) => {
        console.log(response);
        setEvents(response?.data?.data?.allEvents);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box
      sx={{
        py: { lg: 5, md: 5, sm: 4, xs: 3 },
        px: { lg: 5, md: 3, sm: 2, xs: 1 },
      }}
    >
      <Container>
        {/* Section Header */}
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Typography variant="h4" fontWeight={500} color="primary.main">
            All Trending Events
          </Typography>
        </Stack>

        {/* Cards */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: {
              lg: 3,
              md: 3,
              sm: 3,
              xs: 2,
            },
            mt: 5,
          }}
        >
          {loading ? (
            <Typography>Loading events...</Typography>
          ) : events && events.length === 0 ? (
            <Typography>No events found</Typography>
          ) : (
            (events as Event[])?.map((event) => (
              <Box
                key={event.id}
                sx={{
                  flexBasis: {
                    xs: "100%",
                    sm: "calc(49% - 16px)",
                    md: "calc(33% - 16px)",
                  },
                }}
              >
                <EventCard
                  imageUrl={event.imageUrl}
                  title={event.title}
                  date={event.date}
                  time={event.time}
                  description={event.description}
                />
              </Box>
            ))
          )}
        </Box>

        {/* pagination */}
        <Stack
          direction="row"
          justifyContent="center"
          mt={5}
          border="1px solid lightgray"
          p={2}
          borderRadius={2}
        >
          <Pagination page={page} count={5} size="large" />
        </Stack>
      </Container>
    </Box>
  );
};

export default AllEventsPage;
