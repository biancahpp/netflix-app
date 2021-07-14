import { MovieI } from '../../../Interfaces/DiscoverI';
import './styles.scss';
import { FiCheckCircle, FiPlusCircle } from 'react-icons/fi';

interface Props {
  movies: MovieI[] | null,
  myList: any,
  title: string,
  addToMyList: Function
}

export const Discover = ({movies, title, addToMyList, myList}: Props) => {

  return (
    <div className="Discover">
      {
        movies?.length
        ? 
        <div>
          <h1>
          {title}
          </h1>
          <div className="movies-list">
            {movies.map(movie => 
            <div className="movie-img-wrapper" key={movie.id} style={{backgroundImage: `url('https://image.tmdb.org/t/p/w300${movie.backdrop_path}')`}} onClick={() => addToMyList(movie)}>
              {
                myList.hasOwnProperty(movie.id) ?
                  <FiCheckCircle  className="image-icon"/>
                :
                  <FiPlusCircle  className="image-icon" />
              }
            </div>
            )}
          </div>
        </div>
        :
        null
      }
      
    </div>
  )
}

