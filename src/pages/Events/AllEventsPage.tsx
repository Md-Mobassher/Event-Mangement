import { Box, Container, Pagination, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchAllEvents } from "../../services/api";
import EventCard from "../../components/ui/EventCard";
import { Event } from "../../type";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../components/ui/Loading";

const AllEventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [limit] = useState(9);
  const [totalPages, setTotalPages] = useState(1);

  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);

  // Fetch events whenever the page changes
  useEffect(() => {
    setLoading(true);
    fetchAllEvents(page, limit)
      .then((response) => {
        console.log(response);
        setEvents(response?.data?.data?.allEvents);
        setTotalPages(response?.data?.data?.noOfPages || 1);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      })
      .finally(() => setLoading(false));
  }, [page, limit]);

  // Handle pagination change
  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    navigate(`?page=${value}`); // Update the URL with the new page number
  };

  if (loading) return <Loading />;

  if (!events)
    return (
      <Typography variant="h6" fontWeight={500} textAlign="center" color="red">
        Events Not Found
      </Typography>
    );
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
            All Events
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
          {events &&
            events.length > 0 &&
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
                  id={event.id}
                  imageUrl={event.imageUrl}
                  title={event.title}
                  date={event.date}
                  time={event.time}
                  description={event.description}
                />
              </Box>
            ))}
        </Box>

        {/* Pagination */}
        <Stack direction="row" justifyContent="end" mt={5}>
          <Box border="1px solid lightgray" px={4} py={1} borderRadius={2}>
            <Pagination
              page={page} // Current page number from the URL
              count={totalPages} // Total number of pages
              size="large"
              onChange={handlePageChange} // Handle page change
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default AllEventsPage;
