import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import { Event } from "../../type";
import NorthEastIcon from "@mui/icons-material/NorthEast";

const EventCard: React.FC<Partial<Event>> = ({
  imageUrl,
  title,
  date,
  time,
  description,
}) => {
  return (
    <Card sx={{ maxWidth: 480, borderRadius: 2, boxShadow: 3 }}>
      <CardMedia component="img" height="200" image={imageUrl} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography color="black" fontWeight={500}>
          {date} • {time}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography color="black">{description?.slice(0, 120)}...</Typography>
        <Box display="flex" alignItems="center" gap="8px" mt={2}>
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
