import { useState, useEffect } from 'react';
import './App.scss';
import { Dashboard } from './Components/Dashboard/Dashboard';
import { Header } from './Components/Header/Header'
import { MovieI } from './Interfaces/DiscoverI';
import { apiDisplayInfo, apiGetAllMovies } from './Services/ApiService';

function App() {
  const [allMovies, setAllMovies] = useState<MovieI[] | null>(null);
  const [myMovies, setMyMovies] = useState<any>({});

  useEffect(() => {
    apiDisplayInfo().then((response) => {
      setAllMovies(response);
    });
    apiGetAllMovies();
  }, []);

  const addToMyList = (movie: MovieI) => {
    const movieId = movie.id;

      if(myMovies.hasOwnProperty(movie.id)) {
        setMyMovies((state: any) => {
          delete state[movieId];
          return {...state};
        });
        // Ask if there is a way to add a variable prop name into object deconstructing.
        // setMyMovies(({movieId, ...rest}: any) => ({...rest})); 
      } else {
        setMyMovies((state: any) => ({...state, [movieId]: movie}))
      }
  }

  return (
    <div className="App">
      <Header />
      <Dashboard allMovies={allMovies} myMovies={myMovies} addToMyList={addToMyList} />
    </div>
  );
}

export default App;

