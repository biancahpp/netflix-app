import axios from 'axios';
import { CategoryI } from '../Interfaces/Category';
import { MovieI } from '../Interfaces/DiscoverI';

const api = axios.create({
  baseURL: `https://movied.herokuapp.com`,
});

export async function apiDisplayInfo() {
  const response = await api.get('/discover');
  return response.data;
}

export async function apiGetCategories() {
  const response = await api.get('/categories');
  return response.data;
}

export async function apiGetAllMovies() {
  const categories = await apiGetCategories();
  const response = await Promise.all(categories.map(async(category: CategoryI) => {
    const movies = await api.get(`/categories/${category.id}`);
    return movies.data;
  }))
  const allMovies: MovieI[] = [];

  response.flat().forEach((movie: any) => {
    !allMovies.find((mov: MovieI) => mov.id === movie.id) && allMovies.push(movie)
  })

  return allMovies;
}


