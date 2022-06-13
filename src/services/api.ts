import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://jogodobicho-api.herokuapp.com/',
});
