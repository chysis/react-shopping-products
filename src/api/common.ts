const API_TOKEN = `Basic ${btoa(
  `${import.meta.env.VITE_USERNAME}:${import.meta.env.VITE_PASSWORD}`
)}`;

export const HEADERS = {
  Authorization: API_TOKEN,
  'Content-Type': 'application/json',
};
