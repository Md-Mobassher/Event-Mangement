import axios from "axios";

const API_BASE_URL = "https://rendezvous-events.onrender.com/events";

export const fetchAllEvents = (page: number) => {
  return axios.get(`${API_BASE_URL}?page=${page}`);
};

export const fetchEventById = (eventID: string) => {
  return axios.get(`${API_BASE_URL}/${eventID}`);
};

export const searchEventsByCategory = (category: string) => {
  return axios.get(`${API_BASE_URL}/search?category=${category}`);
};
