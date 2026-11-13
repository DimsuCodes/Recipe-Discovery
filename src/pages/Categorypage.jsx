import { useParams } from 'react-router-dom';
import  useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function CategoryPage() {

  //we need to access all the categories specific data to get access to each category.

  const { categoryName } = useParams();

  const { data, loading, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
  return (
    <div>
      <h2>Categories: {categoryName}</h2>
      {loading && <p> Page is loading...</p>}
      {error && <p>{error}</p>}
      {data && data.meals.map((meals) =>(
        <p key={meals.idMeal}><Link to={`/recipe/${meals.idMeal}`}><img src={meals.strMealThumb} alt={meals.strMeal} /> {meals.strMeal}</Link></p>
      ))}
    </div>

  )
}
 