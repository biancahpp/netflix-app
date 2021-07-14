import { MovieI } from '../../Interfaces/DiscoverI';
import { Discover } from './Discover/Discover';
import { MyList } from './MyList/MyList';
import './styles.scss';

interface Props {
  allMovies: MovieI[] | null,
  myMovies: any
  addToMyList: Function
}

export const Dashboard = ({allMovies, myMovies, addToMyList}: Props) => {
  return (
    <div className="Dashboard">
      <MyList movies={myMovies} title={"My List"} addToMyList={addToMyList} />
      <Discover movies={allMovies} title={"Discover"} addToMyList={addToMyList} myList={myMovies}/>
    </div>
  )
}
