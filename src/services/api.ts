import axios from "axios";

const API_BASE_URL = `${process.env.BACKEND_URL}`;

// Fetch all events
export const fetchAllEvents = (page: number, limit: number) => {
  return axios.get(`${API_BASE_URL}?page=${page}&limit=${limit}`);
};

// Fetch event by ID
export const fetchEventById = (eventID: string) => {
  return axios.get(`${API_BASE_URL}/${eventID}`);
};

// Search events by category
export const searchEventsByCategory = (
  category: string,
  page: number,
  limit: number
) => {
  // If no category, fetch all events
  if (!category) {
    return fetchAllEvents(page, limit);
  }
  // If category is selected, fetch events based on category
  return axios.get(
    `${API_BASE_URL}/search?category=${category}&page=${page}&limit=${limit}`
  );
};
