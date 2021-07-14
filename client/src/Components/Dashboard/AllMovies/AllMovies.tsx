import { FiCheckCircle, FiPlusCircle } from 'react-icons/fi';
import { MovieI } from '../../../Interfaces/DiscoverI';
import './styles.scss';

interface Props {
  allMovies: MovieI[] | null
  myList: any,
}

export const AllMovies = ({allMovies, myList}: Props) => {
  return (
    <div className="AllMovies">
      {
        allMovies ? 
        <div>
          {allMovies.map((movie: MovieI) => 
          <div key={movie.id} className="all-movies-img-wrapper" style={{backgroundImage: `url('https://image.tmdb.org/t/p/w300${movie.backdrop_path}')`}}>
            {
              myList.hasOwnProperty(movie.id) ?
              <FiCheckCircle  className="image-icon"/>
            :
              <FiPlusCircle  className="image-icon" />
            }
          </div>
          )}
        </div>
        :
        null
      }
    </div>
  )
}
