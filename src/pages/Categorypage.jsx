import { useParams } from 'react-router-dom';
import  useFetch from '../hooks/useFetch';
import RecipeCard from '../components/RecipeCard';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';

export default function CategoryPage() {

  //we need to access all the categories specific data to get access to each category.

  const { categoryName } = useParams();

  const { data, loading, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
  return (
    <div>
      <h2>Categories: {categoryName}</h2>
      {loading && <Spinner />}
      {error && <ErrorMessage message={error} />}
      <div className="card-grid">
        {data && data.meals.map((meals) =>(
          <RecipeCard key={meals.idMeal} id={meals.idMeal} name={meals.strMeal} image={meals.strMealThumb} />
        ))}
      </div>
    </div>

  )
}
 