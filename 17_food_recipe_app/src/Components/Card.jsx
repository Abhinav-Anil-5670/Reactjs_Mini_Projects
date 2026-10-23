import React, { useContext } from 'react';
import { Link } from 'react-router';
import { GlobalContext } from '../context/Global'
const RecipeCard = ({  publisher, image_url, title, id }) => {

  const {favoriteID, setFavouriteID, handleFavorite} = useContext(GlobalContext)

 

  
  return (
    <div 
      className="flex flex-col rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
    >
      <img 
        className="w-full h-48 object-cover" 
        src={image_url} 
        alt={title} 
        loading="lazy"
      />
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">
          {publisher}
        </p>
        <h3 className="font-bold text-xl mb-4 text-gray-900 line-clamp-2">
          {title}
        </h3>
        
        {/* Placed Link at the bottom so it acts as a styled button */}
        <Link 
            to={`/recipe/${id}`}
            className="mt-auto block text-center w-full bg-gray-900 text-white font-medium py-2.5 rounded-lg hover:bg-gray-800 transition-colors"
        >
            View Recipe
        </Link>
        <button
            onClick={()=>handleFavorite(id)}
            className=" mt-auto block text-center w-full bg-gray-900 text-white font-medium py-2.5 rounded-lg hover:bg-gray-800 transition-colors"
        >
            {
              favoriteID.includes(id) ? "Remove from favorites" : "Add to favorites"
            }
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;