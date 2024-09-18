import React from "react";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

interface EventCategoryCardProps {
  imageUrl: string;
  title: string;
}

const EventCategoryCard: React.FC<EventCategoryCardProps> = ({
  imageUrl,
  title,
}) => {
  return (
    <Card sx={{ overflow: "hidden", height: "240px", maxWidth: "421px" }}>
      <CardActionArea
        sx={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          width: "100%",
          height: "100%",
          overlay: "rgba(0, 0, 0, 0.8)",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "8px",
        }}
      >
        <CardContent>
          <Typography variant="h5" fontWeight={500} color="white">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default EventCategoryCard;
