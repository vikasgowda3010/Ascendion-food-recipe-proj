import { useContext } from "react";
import RecipeItem from "../../components/recipe-item";
import { GlobalContext } from "../../context";
import './Favorites.css';  // Import your CSS file for styling

export default function Favorites() {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="favorites-container py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-white font-extrabold">
            Nothing is added in favorites.
          </p>
        </div>
      )}
    </div>
  );
}
