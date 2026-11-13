# Recipe Discovery

A recipe app built with React that lets you browse recipes by category, search for dishes by name, see each recipe's ingredients and instructions, and save your favorites. All recipe data comes from the free [TheMealDB API](https://www.themealdb.com/).

## Features

- Browse all recipe categories on the home page
- See every recipe in a category
- View a recipe's picture, ingredients, and instructions
- Save favorites (they stay after you refresh)
- Search recipes by name from the navbar

## Built With

- React + Vite
- React Router
- Custom hooks: `useFetch` and `useLocalStorage`
- Context API: `FavoritesContext`

## How to Run It

1. Clone the repo: `git clone https://github.com/DimsuCodes/Recipe-Discovery.git`
2. Go into the folder: `cd Recipe-Discovery`
3. Install: `npm install`
4. Start it: `npm run dev`
5. Open the link it shows (usually http://localhost:5173)

## Reflection

**The hardest part:** The hardest part was knowing what to import and export, and why we do it for each particular file. The recipe page was confusing and a lot to code.

**The easiest part:** The easiest part was the CSS, because I'm familiar with coding in CSS. It was the most relaxing and fun part of all.

**A design decision I made:** My favorites only save each recipe's id, not the whole recipe. An id is small, so it's quick to save in localStorage and easy to check with `includes()`. When I need the name or picture, the page can fetch the full recipe using that id. I also made `useFetch` take a `url`, so every page can reuse the same hook with a different link instead of rewriting the fetch each time.

**What I struggled with and need to work on:**

- **Imports:** knowing when to use `{ }`. A default export is imported without braces, like `import useFetch from ...`, and a named export needs them, like `import { Link } from ...`.
- **Capital letters:** I wrote `<link>` instead of `<Link>` more than once. Lowercase is a plain HTML tag, and only the capital one is React Router's.
- **Quotes vs. variables:** `"query"` is just the word, while `query` is what's stored inside. Template literals need `${query}` without quotes.
- **State values vs. setters:** `query` holds the value and `setQuery` changes it. I mixed them up in the search bar.
- **Data that starts empty:** data is `null` until the fetch finishes, so I need to check it first (`data && ...`) before reading from it.
- **Arrays and API data:** remembering that arrays start at `0`, and using bracket notation to build names like `"strIngredient" + i`.
