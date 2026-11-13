// useParams lets us read the changing part of the URL (the recipe's id).
import { useParams } from 'react-router-dom'
// Our own helper that grabs data from a link and remembers it.
import useFetch from '../hooks/useFetch'
import { useContext } from 'react'
import { FavoritesContext } from '../context/favoritesContext'
import Spinner from '../components/Spinner'
import ErrorMessage from '../components/ErrorMessage'


export default function RecipeDetailPage() {
  // Grab the id from the URL. /recipe/53239 gives us recipeId = "53239".
  // The name must match the :recipeId in App.jsx.
  const { recipeId } = useParams();

  // Ask the API for this one recipe. We stick the id on the end of the link,
  // so every recipe page fetches its own recipe.
  const { data, loading, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)

  // Grab the favorites tools from the shared box.
  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext)

  // The API puts our recipe in a list called meals, and it's the only one,
  // so it's in spot 0. "data &&" stops a crash while data is still null.
  const meals = data && data.meals[0]


  // const ingredients = meals["strIngredient" + i];
  //   for (let meals = 0; meals < ingredients.length; meals++) {
  //     console.log(ingredients[meals])
  //   }

  // An empty box that we fill with lines like "1 tbsp Sriracha".
  // We build it ourselves because the API has no ingredients list.
  const ingredients = []

  // Only fill the box once the recipe has loaded, or meals would be null.
  if (meals) {
    // The API has strIngredient1 to strIngredient20, so count 1 to 20.
    for (let i = 1; i <= 20; i++) {
      // Bracket notation builds the name: "strIngredient" + 1 is "strIngredient1".
      const ingredient = meals["strIngredient" + i]
      // Same trick for the amount: "strMeasure1", "strMeasure2", ...
      const measure = meals["strMeasure" + i]
      // Empty spots are "" or null, which count as false, so we skip them.
      if (ingredient) {
        // Put the amount and the ingredient together and add it to the box.
        ingredients.push(measure + " " + ingredient)
      }
    }
  }

  return (
    <div>
      <h2>Recipe Details: {recipeId} </h2>
      {/* Only show the recipe once it exists, so we don't read from null. */}
      {meals &&
        <div>
          {/* The recipe's name */}
          <h3>{meals.strMeal}</h3>
          {/* If it's saved, clicking removes it. If not, clicking adds it. */}
          <button onClick={() => isFavorite(recipeId) ? removeFavorite(recipeId) : addFavorite(recipeId)}>
            {isFavorite(recipeId) ? "Remove from Favorites" : "Add to Favorites"}
          </button>
          {/* The recipe's picture. alt describes it for screen readers. */}
          <img src={meals.strMealThumb} alt={meals.strMeal} />
          {/* The cooking steps */}
          <p>
            {meals.strInstructions}
          </p>
          <ul>
            {ingredients.map((item) => (
              <li key={item} >
                {item}
              </li>
            ))}

          </ul>
        </div>

      }

      {/* While waiting for the API, show a loading message. */}
      {loading && <Spinner />}
      {/* If the API failed, show the error code. */}
      {error && <ErrorMessage message={error} />}
    </div>

  )
}
