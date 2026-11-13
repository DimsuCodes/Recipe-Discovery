import { FavoritesContext } from "./favoritesContext"
import useLocalStorage from "../hooks/useLocalStorage"

export default function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage("favorites", [])   // key name, start with empty array

  function addFavorite(id) {
    setFavorites([...favorites, id])          // old ones plus the new id
  }

  function removeFavorite(id) {
    setFavorites(favorites.filter((favId) => favId !== id))   // keep all except this id
  }

  function isFavorite(id) {
    return favorites.includes(id)             // true or false
  }

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>   {/* the list + the 3 functions */}
      {children}
    </FavoritesContext.Provider>
  )
}