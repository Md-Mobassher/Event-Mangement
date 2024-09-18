import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Banner from "./Banner";
import TrendingEvents from "./TrendingEvents";
import { fetchAllEvents, searchEventsByCategory } from "../../services/api";

const HomePage: React.FC = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch all events initially
  useEffect(() => {
    setLoading(true);
    fetchAllEvents(1)
      .then((response) => {
        console.log(response);
        setEvents(response?.data?.data?.allEvents);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  console.log(events);
  // Search for events by category
  const handleSearch = () => {
    setLoading(true);
    searchEventsByCategory(category)
      .then((response) => {
        setEvents(response.data.events);
      })
      .catch((error) => {
        console.error("Error searching events:", error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Banner
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        category={category}
        setCategory={setCategory}
        handleSearch={handleSearch}
      />
      <TrendingEvents events={events} loading={loading} />
    </Box>
  );
};

export default HomePage;
