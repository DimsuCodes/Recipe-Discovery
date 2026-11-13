import { useSearchParams, Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function SearchPage() {
  const [searchParams] = useSearchParams()       // reads the part after ? in the URL
  const query = searchParams.get("query")            

  const { data, loading, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)

  return (
    <div>
      <h2>Results for "{query}"</h2>
      {loading && <p>Page is loading...</p>}
      {error && <p>{error}</p>}
      {data && !data.meals && <p>No recipes found.</p>}
      {data && data.meals && data.meals.map((meal) => (
        <p key={meal.idMeal}>
          <Link to={`/recipe/${meal.idMeal}`}>{meal.strMeal}</Link>
        </p>
      ))}
    </div>
  )
}