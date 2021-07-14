import { useState, useEffect } from 'react';
import './App.scss';
import { Dashboard } from './Components/Dashboard/Dashboard';
import { Header } from './Components/Header/Header'
import { MovieI } from './Interfaces/DiscoverI';
import { apiDisplayInfo, apiGetAllMovies } from './Services/ApiService';

function App() {
  const [discoverMovies, setDiscoverMovies] = useState<MovieI[] | null>(null);
  const [allMovies, setAllMovies] = useState<MovieI[] | null>(null);
  const [myMovies, setMyMovies] = useState<any>({});
  const [filterMovies, setFilterMovies] = useState<any>(allMovies);

  useEffect(() => {
    apiDisplayInfo().then((response) => {
      setDiscoverMovies(response);
    });
    apiGetAllMovies().then((response) => {
      setAllMovies(response);
    }
    );
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
      <Header setFilter={setFilterMovies}/>
      <Dashboard discoverMovies={discoverMovies} myMovies={myMovies} addToMyList={addToMyList} allMovies={allMovies}/>
    </div>
  );
}

export default App;

