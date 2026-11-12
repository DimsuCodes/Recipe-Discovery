import useFetch from '../hooks/useFetch'
import {Link} from 'react-router-dom'




export default function HomePage() {
  

  const {data, loading, error} = useFetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      
  return(
    <div>
      <h1>Hello Recipes Pages!</h1>
      {loading && <p> Page is loading...</p>}
      {error && <p>{error}</p>}
      {data && data.categories.map((category) => (
        <p key={category.idCategory}><Link to={`/category/${category.strCategory}`}>{category.strCategory}</Link></p>
      ))}
    </div>
  )
  
}
