import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Banner from "./Banner";
import TrendingEvents from "./TrendingEvents";
import { fetchAllEvents, searchEventsByCategory } from "../../services/api";
import EventCategoriesSection from "./EventCategoriesSection";

const HomePage: React.FC = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageNumber] = useState(1);
  const [limit] = useState(6);

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
      <EventCategoriesSection />
    </Box>
  );
};

export default HomePage;
