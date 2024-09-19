/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Container,
  FormControl,
  InputBase,
  MenuItem,
  Pagination,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { fetchAllEvents, searchEventsByCategory } from "../../services/api";
import EventCard from "../../components/ui/EventCard";
import { Event } from "../../type";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../components/ui/Loading";
import SearchIcon from "@mui/icons-material/Search";

const AllEventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [allFetchedEvents, setAllFetchedEvents] = useState<Event[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [limit] = useState(9);
  const [eventCategories, setEventCategories] = useState<string[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);

  useEffect(() => {
    setLoading(true);
    if (!category) {
      fetchAllEvents(pageNumber, limit)
        .then((response) => {
          const fetchedEvents = response?.data?.data?.allEvents || [];
          setAllFetchedEvents(fetchedEvents);
          setEvents(fetchedEvents);
          setTotalPages(response?.data?.data?.noOfPages || 1);

          // Extract and flatten categories, then remove duplicates
          const categories = fetchedEvents
            .map((event: Event) => event.category)
            .flat();

          const uniqueCategories = Array.from(new Set(categories));
          setEventCategories(uniqueCategories as string[]);
        })
        .catch((error) => {
          console.error("Error fetching events:", error);
        })
        .finally(() => setLoading(false));
    }
    if (category) {
      fetchByCategory();
    }
  }, [category, pageNumber, limit]);

  // Search events by filtering the already fetched data
  const handleSearch = () => {
    if (searchTerm.trim()) {
      const filteredEvents = allFetchedEvents.filter((event: Event) =>
        event?.title?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setEvents(filteredEvents);
      if (filteredEvents.length > 9) {
        setTotalPages(2);
      } else {
        setTotalPages(1);
      }

      setCategory("");
    } else if (category) {
      fetchByCategory();
      setCategory("");
    } else {
      setEvents(allFetchedEvents);
      setCategory("");
    }
  };
  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  // Fetch events by category
  const fetchByCategory = () => {
    setLoading(true);
    searchEventsByCategory(category, pageNumber, limit)
      .then((response) => {
        setEvents(response?.data?.data?.event);
        setTotalPages(response?.data?.data?.noOfPages || 1);
      })
      .catch((error) => {
        console.error("Error searching events by category:", error);
      })
      .finally(() => {
        setLoading(false);
        setSearchTerm("");
      });
  };

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    navigate(`?page=${value}`);
    setPageNumber(value);
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
        <Stack
          direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <Typography variant="h4" fontWeight={500} color="primary.main">
            All Events
          </Typography>

          <Stack
            direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              gap: 1,
              width: "300px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                p: 1,
              }}
            >
              <SearchIcon sx={{ color: "grey.500" }} />
              <InputBase
                placeholder="Search event"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ ml: 1, flex: 1 }}
              />
            </Box>

            <Box width={180}>
              <FormControl variant="outlined" fullWidth margin="none">
                <Select
                  defaultValue=""
                  displayEmpty
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <MenuItem defaultValue="">Categories</MenuItem>
                  <MenuItem value={""}>All</MenuItem>

                  {eventCategories.map((cat) => (
                    <MenuItem key={cat} value={cat}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Stack>
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
