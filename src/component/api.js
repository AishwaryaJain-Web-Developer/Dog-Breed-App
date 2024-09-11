import axios from 'axios';

const API_KEY = 'live_GhXL2pki6pFpAKEfE69Ddrr8AJBlF6kog2F0BNYBbYSloX9FXmcolr1mXK5Ni8QN';
const BASE_URL = 'https://api.thedogapi.com/v1/images/search';

export const fetchDogs = (page = 0) => {
  return axios.get(BASE_URL, {
    params: {
      size: 'med',
      mime_types: 'jpg',
      format: 'json',
      has_breeds: true,
      order: 'RANDOM',
      page,
      limit: 10,
    },
    headers: {
      'x-api-key': API_KEY,
    },
  });
};
