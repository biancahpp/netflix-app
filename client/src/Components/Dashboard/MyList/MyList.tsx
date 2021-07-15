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
                  >
                  {
                    <div className="movie-details" >
                      <h1>{movieId[1].title}</h1>
                      <p>{movieId[1].overview}</p>
                      {
                        movies.hasOwnProperty(movieId[1].id) ?
                        <FiCheckCircle  className="image-icon"onClick={() => addToMyList(movieId[1])}/>
                      :
                        <FiPlusCircle  className="image-icon" onClick={() => addToMyList(movieId[1])}/>
                      }
                    </div>                    
                  }
                </div>
                
              )
            }
          </div>
        </div>
        :
        null
      }
      
    </div>
  )
}