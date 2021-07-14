import './styles.scss';
import { FiSearch } from 'react-icons/fi'

interface Props {
  filterMovies: Function
}

export const Header = ({filterMovies}: Props) => {
  return (
    <div className="Header">
      <div className="logo-wrapper">
        <img src="./netflix-logo-history-32.png" alt="Netflix Logo" />
      </div>
      <div className="search-wrapper">
        <FiSearch className="search-icon"/>
        <input type="text" placeholder="Search" onChange={e => filterMovies(e.target.value)}/>
      </div>
    </div>
  )
}

