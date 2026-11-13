import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'


export default function RecipeDetailPage() {
  const { RecipeDetailPage } = useParams();
  const { data, loading, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
  return (
    <div>
      <h2>Recipe Details: {recipeId}</h2>
      {loading && <p> Page is loading...</p>}
      {error && <p>{error}</p>}
    </div>

  )
}
