import useFetch from '../hooks/useFetch'
import {Link} from 'react-router-dom'
import Spinner from '../components/Spinner'
import ErrorMessage from '../components/ErrorMessage'




export default function HomePage() {
  

  const {data, loading, error} = useFetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      
  return(
    <div>
      <h1>Hello Recipes Pages!</h1>
      {loading && <Spinner />}
      {error && <ErrorMessage message={error} />}
      {data && data.categories.map((category) => (
        <p key={category.idCategory}><Link to={`/category/${category.strCategory}`}>{category.strCategory}</Link></p>
      ))}
    </div>
  )
  
}
