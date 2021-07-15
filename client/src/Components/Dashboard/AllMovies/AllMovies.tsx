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
      <h1>Most Popular</h1>
      {
        allMovies ?
          <div>
            {allMovies.map((movie: MovieI) =>
              <div key={movie.id} className="all-movies-img-wrapper" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w300${movie.backdrop_path}')` }} onClick={() => addToMyList(movie)}>
                {
                  myList.hasOwnProperty(movie.id) ?
                    <FiCheckCircle className="image-icon"/>
                    :
                    <FiPlusCircle className="image-icon"/>
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
