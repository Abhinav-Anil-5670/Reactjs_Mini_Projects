import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/Global'
import RecipeCard from '../Components/Card'

const Home = () => {
    const {loading, recipeList} = useContext(GlobalContext)

  return (
    <div className="max-w-7xl mx-auto px-8 py-10">
        {
            loading ? (
                <h1 className="text-3xl font-bold text-center text-gray-700 mt-20">Loading Recipes...</h1> 
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {recipeList.map((data, index)=>(
                        <RecipeCard 
                            key={index}  
                            publisher={data.publisher} 
                            image_url={data.image_url} 
                            title={data.title} 
                            id={data.id}
                        />
                    ))}
                </div>
            )
        }
    </div>
  )
}

export default Home