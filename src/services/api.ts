import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.API_URL || 'https://thawing-citadel-77165.herokuapp.com/',
});
