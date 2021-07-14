import './styles.scss';
import { FiCheckCircle, FiPlusCircle } from 'react-icons/fi';

interface Props {
  movies: Object,
  title: string,
  addToMyList: Function

}

export const MyList = ({movies, title, addToMyList}: Props) => {

  return (
    <div className="MyList">
      {
        Object.keys(movies).length !== 0
        ? 
        <div>
          <h1>
          {title}
          </h1>
          <div className="movies-list">
            {
              Object.entries(movies).map((movieId): any =>
              <div 
                  className="movie-img-wrapper" 
                  key={movieId[1].id} 
                  style={{backgroundImage: `url('https://image.tmdb.org/t/p/w300${movieId[1].backdrop_path}')`}} 
                  onClick={() => addToMyList(movieId[1])}
                  >
                   {
                  movies.hasOwnProperty(movieId[1].id) ?
                    <FiCheckCircle  className="image-icon"/>
                  :
                    <FiPlusCircle  className="image-icon" />
              }
                </div>
                
              )
            }
            {/* {movies.map(movie => 
            <div className="movie-img-wrapper" key={movie.id} style={{backgroundImage: `url('https://image.tmdb.org/t/p/w300${movie.backdrop_path}')`}} onClick={() => addToMyList(movie)}>
              <FiPlusCircle  className="image-icon" />
            </div>
            )} */}
          </div>
        </div>
        :
        null
      }
      
    </div>
  )
}


{/* {
  movie.my_list ? <FiPlusCircle  className="image-icon" onClick={() => addToMyList(movie)}/> : <FiPlusCircle  className="image-icon"/>
} */}