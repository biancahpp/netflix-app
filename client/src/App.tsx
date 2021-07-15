import { useState, useEffect } from 'react';
import './App.scss';
import { AllMovies } from './Components/Dashboard/AllMovies/AllMovies';
import { Dashboard } from './Components/Dashboard/Dashboard';
import { Header } from './Components/Header/Header'
import { MovieI } from './Interfaces/DiscoverI';
import { apiDisplayInfo, apiGetAllMovies } from './Services/ApiService';

function App() {
  const [discoverMovies, setDiscoverMovies] = useState<MovieI[]>([]);
  const [filteredDiscover, setFilteredDiscover] = useState<MovieI[]>([]);

  const [myMovies, setMyMovies] = useState<any>({});
  const [filteredMyMovies, setFilteredMyMovies] = useState<any>({});


  const [allMovies, setAllMovies] = useState<MovieI[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<any>(allMovies);

  useEffect(() => {
    apiDisplayInfo().then((response) => {
      setDiscoverMovies(response);
      setFilteredDiscover(response);
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
        setFilteredMyMovies((state: any) => {
          delete state[movie.id];
          return {...state};
        })
      } else {
        setMyMovies((state: any) => ({...state, [movie.id]: movie}))
        setFilteredMyMovies((state: any) => ({...state, [movie.id]: movie}))
      }
  }

  const filterMovies = (value: string) => {
    const newAllMovies = allMovies.filter((movie: MovieI) => movie.title.toLowerCase().includes(value));
    const newDiscover = discoverMovies.filter((movie: MovieI) => movie.title.toLowerCase().includes(value));
    
    filterMyMovies(value);    
    setFilteredMovies(newAllMovies);
    setFilteredDiscover(newDiscover);
  }

  const filterMyMovies = (value: string) => {
    let newMyMovies = {}
    for (let id in myMovies) {
      if (myMovies[id].title.toLowerCase().includes(value)) newMyMovies = {...newMyMovies, id: myMovies[id]}
    }
    setFilteredMyMovies(newMyMovies);    
  }

  return (
    <div className="App">
      <Header filterMovies={filterMovies}/>
      <Dashboard discoverMovies={filteredDiscover} myMovies={filteredMyMovies} addToMyList={addToMyList} allMovies={filteredMovies}/>
      <AllMovies allMovies={filteredMovies} myList={filteredMyMovies} addToMyList={addToMyList}/>
    </div>
  );
}

export default App;

