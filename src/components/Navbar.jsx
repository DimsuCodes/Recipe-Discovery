import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [query, setQuery] = useState("")        // what they type, starts empty
  const navigate = useNavigate()                 // lets us change pages from code

  function handleSubmit(e) {
    e.preventDefault()                                      // stop the page from reloading
    navigate(`/search?query=${query}`)             // go to the search page
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <form onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={(e) => query(e.target.value)}
          placeholder="Search recipes..."
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  )
}