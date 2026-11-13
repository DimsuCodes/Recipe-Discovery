import { useSearchParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import RecipeCard from '../components/RecipeCard'
import Spinner from '../components/Spinner'
import ErrorMessage from '../components/ErrorMessage'

export default function SearchPage() {
  const [searchParams] = useSearchParams()       // reads the part after ? in the URL
  const query = searchParams.get("query")            

  const { data, loading, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)

  return (
    <div>
      <h2>Results for "{query}"</h2>
      {loading && <Spinner />}
      {error && <ErrorMessage message={error} />}
      {data && !data.meals && <p>No recipes found.</p>}
      <div className="card-grid">
        {data && data.meals && data.meals.map((meal) => (
          <RecipeCard key={meal.idMeal} id={meal.idMeal} name={meal.strMeal} image={meal.strMealThumb} />
        ))}
      </div>
    </div>
  )
}