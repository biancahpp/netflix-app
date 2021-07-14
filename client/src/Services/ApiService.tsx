import axios from 'axios';

const api = axios.create({
  baseURL: `https://movied.herokuapp.com`,
});

export async function apiDisplayInfo() {
  const response = await api.get('/discover');
  return response.data;
}


