import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { Event } from "../../type";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { formatDate } from "../../utils/formatDate";
import { formatTime } from "../../utils/formatTime";

const EventCard: React.FC<Partial<Event>> = ({
  imageUrl,
  title,
  date,
  time,
  description,
}) => {
  const fdate = formatDate(date as string);
  const ftime = formatTime(time as string);

  return (
    <Card sx={{ maxWidth: 480, borderRadius: 2, boxShadow: 3 }}>
      <CardMedia component="img" height="200" image={imageUrl} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography color="black" fontWeight={500} gap={2} display="flex">
          {fdate} <Box px={"1px"}>•</Box> {ftime}
        </Typography>

        <Typography color="black" mt={3}>
          {description?.slice(0, 120)}...
        </Typography>
        <Box display="flex" alignItems="center" gap="8px" mt={3}>
          <Typography color="secondary.main" fontWeight={500}>
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
