import { Routes, Route } from 'react-router-dom'
import CategoryPage from "./pages/Categorypage";
import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import SearchPage from "./pages/SearchPage";

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/"element={<HomePage />}/>
                <Route path="/category/:categoryName"element={<CategoryPage />}/>
                <Route path="/recipe/:recipeId"element={<RecipeDetailPage />}/>
                <Route path="/favorites"element={<FavoritesPage />}/>
                <Route path="/search"element={<SearchPage />}/>
                 <Route path="*"element={<NotFoundPage />}/>
            </Routes>
        </div>
    )
}