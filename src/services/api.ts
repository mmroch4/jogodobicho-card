import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://tiodavis-api.herokuapp.com',
});
