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
  const [filteredMovies, setFilteredMovies] = useState<any>(allMovies);

  useEffect(() => {
    apiDisplayInfo().then((response) => {
      setDiscoverMovies(response);
    });
    apiGetAllMovies().then((response) => {
      setAllMovies(response);
      setFilteredMovies(response);
    }
    );
  }, []);

  const addToMyList = (movie: MovieI) => {
      if(myMovies.hasOwnProperty(movie.id)) {
        setMyMovies((state: any) => {
          delete state[movie.id];
          return {...state};
        });
      } else {
        setMyMovies((state: any) => ({...state, [movie.id]: movie}))
      }
  }

  const filterMovies = (value: string) => {
    const result = allMovies?.filter(movie => movie.title.toLowerCase().includes(value));

    setFilteredMovies(result);
  }

  return (
    <div className="App">
      <Header filterMovies={filterMovies}/>
      <Dashboard discoverMovies={discoverMovies} myMovies={myMovies} addToMyList={addToMyList} allMovies={filteredMovies}/>
    </div>
  );
}

export default App;

