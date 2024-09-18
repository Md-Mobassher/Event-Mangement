import { Box, Container, Stack, Typography } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import EventCard from "../../components/ui/EventCard";
import { Event } from "../../type";

interface TrendingEventsProps {
  events: Event[] | undefined;
  loading: boolean;
}

const TrendingEvents: React.FC<TrendingEventsProps> = ({ events, loading }) => {
  return (
    <Box
      sx={{
        py: { lg: 7, md: 6, sm: 4, xs: 3 },
        px: { lg: 5, md: 3, sm: 2, xs: 1 },
      }}
    >
      <Container>
        {/* Section Header */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h4" fontWeight={500} color="black">
            Trending Events
          </Typography>
          <Box display="flex" alignItems="center" gap="8px">
            <Typography color="secondary.main" fontWeight={500}>
              View all trending events
            </Typography>
            <NorthEastIcon
              sx={{ color: "secondary.main", width: "16px", height: "16px" }}
            />
          </Box>
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
            events?.slice(0, 6)?.map((event) => (
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
      </Container>
    </Box>
  );
};

export default TrendingEvents;
