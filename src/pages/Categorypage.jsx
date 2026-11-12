import { useParams } from 'react-router-dom'

export default function CategoryPage() {

  //we need to access all the categories specific data to get access to each category.

  const{ categoryName } = useParams();
  
  return(
    <h2>Categories{categoryName}</h2>
  ) 
}
