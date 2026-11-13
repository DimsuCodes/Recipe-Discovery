import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FavoritesContext } from '../context/favoritesContext'

export default function FavoritesPage() {
  // Grab the list of saved recipe ids from the shared favorites box.
  const { favorites } = useContext(FavoritesContext)

  // Nothing saved yet? Show a message that sends them to browse.
  if (favorites.length === 0) {
    return <p>No favorites yet! <Link to="/">Browse recipes</Link></p>
  }

  return (
    <div>
      <h2>My Favorites</h2>
      {/* One link per saved id. Later, RecipeCard will show the picture and name. */}
      {favorites.map((id) => (
        <p key={id}><Link to={`/recipe/${id}`}>Recipe {id}</Link></p>
      ))}
    </div>
  )
}
