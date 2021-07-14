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
  const response = await Promise.all(categories.map(async(category: any) => {
    const movies = await api.get(`/categories/${category.id}`);
    return movies.data;
  }))
  const allMovies:any = [];

  response.flat().forEach((movie: any) => {
    !allMovies.find((mov: MovieI) => mov.id === movie.id) && allMovies.push(movie)
  })
  
  return allMovies;
}


//criar service de pegar categories
//criar service de pegar todos os filmes -> chamar o service de pegar categoria e armazenar numa variavel, colocar num promise.all que vai ter o map de cada categoria


