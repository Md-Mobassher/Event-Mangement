/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Banner from "./Banner";
import TrendingEvents from "./TrendingEvents";
import { fetchAllEvents, searchEventsByCategory } from "../../services/api";
import EventCategoriesSection from "./EventCategoriesSection";
import { Event } from "../../type";

const HomePage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [allFetchedEvents, setAllFetchedEvents] = useState<Event[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageNumber] = useState(1);
  const [limit] = useState(6);
  const [eventCategories, setEventCategories] = useState<string[]>([]);

  // Fetch all events initially
  useEffect(() => {
    setLoading(true);
    fetchAllEvents(pageNumber, limit)
      .then((response) => {
        const fetchedEvents = response?.data?.data?.allEvents || [];
        setAllFetchedEvents(fetchedEvents);
        setEvents(fetchedEvents);

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
  }, [pageNumber, limit]);

  // Search events by filtering the already fetched data
  const handleSearch = () => {
    if (searchTerm.trim()) {
      const filteredEvents = allFetchedEvents.filter((event: Event) =>
        event?.title?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setEvents(filteredEvents);
      setSearchTerm("");
      setCategory("");
    } else if (category) {
      fetchByCategory();
      setSearchTerm("");
      setCategory("");
    } else {
      setEvents(allFetchedEvents);
      setSearchTerm("");
      setCategory("");
    }
  };

  // Fetch events by category
  const fetchByCategory = () => {
    setLoading(true);
    searchEventsByCategory(category, pageNumber, limit)
      .then((response) => {
        setEvents(response?.data?.data?.event);
      })
      .catch((error) => {
        console.error("Error searching events by category:", error);
      })
      .finally(() => {
        setLoading(false);
        setSearchTerm("");
      });
  };

  // Trigger search when the category changes
  useEffect(() => {
    if (category) {
      fetchByCategory();
    }
  }, [category]);

  return (
    <Box>
      <Banner
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        category={category}
        setCategory={setCategory}
        handleSearch={handleSearch}
        eventCategories={eventCategories} // Pass unique categories to Banner
      />

      <TrendingEvents events={events} loading={loading} />

      <EventCategoriesSection />
    </Box>
  );
};

export default HomePage;
