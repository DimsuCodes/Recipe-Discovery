import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'



export default function RecipeDetailPage() {
  const { recipeId } = useParams();
  const { data, loading, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
  const meals = data && data.meals[0]
  return (
    <div>
      <h2>Recipe Details: {recipeId} </h2>
      {meals &&
        <div>
          <h3>{meals.strMeal}</h3>  
          <img src={meals.strMealThumb} alt={meals.strMeal} />
          <p>
            {meals.strInstructions}
          </p>
        </div>

      }


      {loading && <p> Page is loading...</p>}
      {error && <p>{error}</p>}
    </div>

  )
}
