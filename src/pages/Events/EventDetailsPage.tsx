import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Button,
  Card,
  CardMedia,
  Stack,
  Container,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useParams } from "react-router-dom";
import { fetchEventById } from "../../services/api";
import { Event } from "../../type";
import { formatDate } from "../../utils/formatDate";
import { formatTime } from "../../utils/formatTime";
import Loading from "../../components/ui/Loading";

const EventDetailsPage: React.FC = () => {
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchEventById(id as string)
      .then((response) => {
        console.log(response);
        setEvent(response?.data?.data?.event);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const fdate = formatDate(event?.date as string);
  const ftime = formatTime(event?.time as string);

  if (loading) return <Loading />;

  if (!event)
    return (
      <Typography variant="h6" fontWeight={500} textAlign="center">
        Event Not Found
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
        {
          <Box>
            {/* Event Image */}
            <Card>
              <CardMedia
                component="img"
                image={event?.imageUrl} // Replace with your image URL
                alt="Event image"
                sx={{ borderRadius: "8px", height: "480px", width: "100%" }}
              />
            </Card>

            <Grid container spacing={4} mt={2}>
              {/* Left Section */}
              <Grid item xs={12} md={8}>
                {/* Event Title */}
                <Typography variant="h4" fontWeight={600}>
                  {event?.title}
                </Typography>

                {/* Event Date, Time, and Location */}
                <Stack direction="column" spacing={1} mt={2}>
                  <Stack direction="row" alignItems="center" gap={3}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <CalendarTodayIcon
                        sx={{
                          color: "primary.main",
                        }}
                      />
                      <Typography>{fdate}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <AccessTimeIcon
                        sx={{
                          color: "primary.main",
                        }}
                      />
                      <Typography>{ftime}</Typography>
                    </Stack>
                  </Stack>

                  <Stack direction="row" spacing={1} alignItems="center">
                    <LocationOnIcon
                      sx={{
                        color: "primary.main",
                      }}
                    />
                    <Typography>{`${event?.address}, ${event?.city}, ${event?.country}`}</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <PersonIcon
                      sx={{
                        color: "primary.main",
                      }}
                    />
                    <Typography>{event?.organizer?.name}</Typography>
                  </Stack>
                </Stack>

                {/* Event Description */}
                <Typography variant="h6" fontWeight={500} mt={5}>
                  Event Description
                </Typography>
                <Typography mt={2} color="black">
                  {event?.description}
                </Typography>

                {/* Pricing Section */}
                <Typography variant="h6" fontWeight={500} mt={4}>
                  Tickets Pricing
                </Typography>
                <Stack direction="row" spacing={4} mt={2}>
                  {event?.price === 0 ? (
                    <Typography variant="body1">Free</Typography>
                  ) : (
                    <>
                      <Box>
                        <Typography variant="body1">Single</Typography>
                        <Typography variant="h6" color="primary">
                          {`NGN ${event?.price}`}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="body1">Pair</Typography>
                        <Typography variant="h6" color="primary">
                          {`NGN ${
                            event
                              ? event.price * 2 - 1000
                              : "Price not available"
                          }`}
                        </Typography>
                      </Box>
                    </>
                  )}
                </Stack>

                {/* Buy Now Button */}
                <Button variant="contained" color="primary" sx={{ mt: 6 }}>
                  Buy Now
                </Button>
              </Grid>

              {/* Right Section - Contact and Map */}
              <Grid item xs={12} md={4} mt={7}>
                {/* Contact Organizers */}
                <Box>
                  <Typography variant="h6" fontWeight={500}>
                    Contact Organizers
                  </Typography>
                  <Stack direction="row" spacing={1} mt={2}>
                    <IconButton>
                      <FacebookIcon color="primary" />
                    </IconButton>
                    <IconButton>
                      <InstagramIcon sx={{ color: "primary.main" }} />
                    </IconButton>
                    <IconButton>
                      <TwitterIcon sx={{ color: "primary.main" }} />
                    </IconButton>
                  </Stack>
                </Box>

                {/* Directions */}
                <Box mt={4}>
                  <Typography variant="h6" fontWeight={500}>
                    Directions
                  </Typography>
                  {/* Embed a Google Map iframe */}
                  <Box mt={2}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509391!2d144.95373531531018!3d-37.8172099797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d4aa0fd2f5c3!2sRacecourse!5e0!3m2!1sen!2sus!4v1630926801895!5m2!1sen!2sus"
                      width="100%"
                      height="450"
                      style={{ border: "0" }}
                      allowFullScreen={false}
                      loading="lazy"
                    ></iframe>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        }
      </Container>
    </Box>
  );
};

export default EventDetailsPage;
