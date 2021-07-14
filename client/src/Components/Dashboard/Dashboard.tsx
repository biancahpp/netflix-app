import { MovieI } from '../../Interfaces/DiscoverI';
import { AllMovies } from './AllMovies/AllMovies';
import { Discover } from './Discover/Discover';
import { MyList } from './MyList/MyList';
import './styles.scss';

interface Props {
  discoverMovies: MovieI[] | null
  myMovies: any
  addToMyList: Function
  allMovies: MovieI[] | null
}

export const Dashboard = ({discoverMovies, myMovies, addToMyList, allMovies}: Props) => {
  return (
    <div className="Dashboard">
      <MyList movies={myMovies} title={"My List"} addToMyList={addToMyList} />
      <Discover movies={discoverMovies} title={"Discover"} addToMyList={addToMyList} myList={myMovies}/>
      <AllMovies allMovies={allMovies} myList={myMovies}/>
    </div>
  )
}
