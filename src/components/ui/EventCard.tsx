import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { Event } from "../../type";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { formatDate } from "../../utils/formatDate";
import { formatTime } from "../../utils/formatTime";
import { Link } from "react-router-dom";

const EventCard: React.FC<Partial<Event>> = ({
  id,
  imageUrl,
  title,
  date,
  time,
  description,
}) => {
  const fdate = formatDate(date as string);
  const ftime = formatTime(time as string);

  return (
    <Card sx={{ maxWidth: 480, borderRadius: 2, boxShadow: 3, height: "100%" }}>
      <CardMedia component="img" height="200" image={imageUrl} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography color="black" fontWeight={500} gap={2} display="flex">
          {fdate} <Box px={"1px"}>•</Box> {ftime}
        </Typography>

        <Typography color="black" mt={"20px"}>
          {description?.slice(0, 130)}...
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          gap="8px"
          mt={"20px"}
          component={Link}
          to={`/events/${id}`}
          sx={{ textDecoration: "none" }}
        >
          <Typography
            color="secondary.main"
            fontWeight={500}
            sx={{ textDecoration: "none" }}
          >
            View details
          </Typography>
          <NorthEastIcon
            sx={{ color: "secondary.main", width: "16px", height: "16px" }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default EventCard;
