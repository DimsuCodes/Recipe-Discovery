import { Link } from 'react-router-dom'

// One recipe: its picture and name, linking to its recipe page.
// Used on the Category and Search pages so every recipe looks the same.
export default function RecipeCard ({id, name, image}) {
    return(
         <Link to= {`/recipe/${id}`} className="recipe-card">
            <img src={image} alt={name}/>
            <p>{name}</p>
         </Link>
    )
}
