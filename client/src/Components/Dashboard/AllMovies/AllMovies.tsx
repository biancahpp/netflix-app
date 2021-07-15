import { FiCheckCircle, FiPlusCircle } from 'react-icons/fi';
import { MovieI } from '../../../Interfaces/DiscoverI';
import './styles.scss';

interface Props {
  allMovies: MovieI[] | null
  myList: any,
  addToMyList: Function
}

export const AllMovies = ({ allMovies, myList, addToMyList }: Props) => {
  return (
    <div className="AllMovies">
      {
        allMovies ?
          <div>
            {allMovies.map((movie: MovieI) =>
              <div key={movie.id} className="all-movies-img-wrapper" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w300${movie.backdrop_path}')` }}>
                {
                  myList.hasOwnProperty(movie.id) ?
                    <FiCheckCircle className="image-icon" onClick={() => addToMyList(movie.id)}/>
                    :
                    <FiPlusCircle className="image-icon" onClick={() => addToMyList(movie.id)}/>
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
