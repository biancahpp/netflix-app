import './styles.scss';
import { FiSearch } from 'react-icons/fi'

interface Props {
  setFilter: Function
}

export const Header = ({setFilter}: Props) => {
  return (
    <div className="Header">
      <div className="logo-wrapper">
        <img src="./netflix-logo-history-32.png" alt="Netflix Logo" />
      </div>
      <div className="search-wrapper">
        <FiSearch className="search-icon"/>
        <input type="text" placeholder="Search"/>
      </div>
    </div>
  )
}

