import { Link } from 'react-router-dom'
import Logo from './Logo'
import SearchBar from './SearchBar'

export default function Header() {
  return (
    <div className="flex justify-between">
      <Link to={'/'}>
        <Logo />
      </Link>
      <SearchBar />
    </div>
  )
}
