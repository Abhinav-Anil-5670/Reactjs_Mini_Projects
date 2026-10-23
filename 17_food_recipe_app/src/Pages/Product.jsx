import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../context/Global';
import { useNavigate } from 'react-router-dom';
function Product() {

  const navigate = useNavigate();

  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {handleFavorite,favoriteID} = useContext(GlobalContext)

  useEffect(() => {
    if (!id) return;

    async function fetchRecipe() {
      try {
        setLoading(true);
        const response = await fetch(`https://forkify-api.jonas.io/api/v2/recipes/${id}`);
        
        if (!response.ok) {
          throw new Error('Could not find that recipe!');
        }

        const data = await response.json();
        setRecipe(data.data.recipe);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRecipe();
  }, [id]);

  if (loading) return <p className="text-center text-2xl font-bold text-gray-700 mt-20">Loading recipe...</p>;
  if (error) return <p className="text-center text-xl font-bold text-red-500 mt-20">Error: {error}</p>;
  if (!recipe) return null;

  return (
    <div className="max-w-5xl mx-auto p-6 mt-8">
      <button 
        onClick={() => navigate(-1)} 
        className="bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
    >
      Go Back
    </button>
      <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
        
        <div className="w-full lg:w-1/2">
            <img 
                src={recipe.image_url} 
                alt={recipe.title} 
                className="w-full h-96 object-cover rounded-2xl shadow-md"
            />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col">
            <p className="text-sm text-orange-500 font-bold uppercase tracking-wider mb-2">{recipe.publisher}</p>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{recipe.title}</h1>
            <p className="text-gray-600 font-medium mb-8">Cooking time: <span className="font-bold text-gray-900">{recipe.cooking_time} mins</span></p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Ingredients</h2>
            <ul className="flex flex-col gap-3 overflow-y-auto max-h-64 pr-2">
                {recipe.ingredients.map((ing, index) => (
                <li key={index} className="bg-gray-50 p-3 rounded-lg text-gray-700 border border-gray-100 flex items-start gap-2">
                    <span className="font-bold text-orange-500 min-w-fit">{ing.quantity} {ing.unit}</span> 
                    <span>{ing.description}</span>
                </li>
                ))}
            </ul>
        </div>

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
}

export default Product;