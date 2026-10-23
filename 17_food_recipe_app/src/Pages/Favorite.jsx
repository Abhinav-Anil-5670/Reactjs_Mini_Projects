import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/Global'
import RecipeCard from '../Components/Card'
const Favorite = () => {

  const {favoriteID} = useContext(GlobalContext)
  const [loading, setLoading] = useState(false)
  const [favoriteRecipes, setFavoriteRecipes] = useState([])

  useEffect(()=>{

    async function fetchAllFavorite() {
      try{
        setLoading(true)

        //Create a promise array for all the products
        const fetchPromise = favoriteID.map((id)=>{
          return fetch(`https://forkify-api.jonas.io/api/v2/recipes/${id}`)
        })

        //get the data
        const response = await Promise.all(fetchPromise)

        //create json promise array - returns promises
        const jsonPromise = response.map((res)=>{
          if(!res.ok) throw new Error("Failed to fetch recipe")
          return res.json()
        })

        const results = await Promise.all(jsonPromise)

        const recipesData = results.map(result => result.data.recipe)
        setFavoriteRecipes(recipesData)
      }
      catch(err){ 
        console.log(err)
      }finally{
        setLoading(false)
      }
    }

    if (favoriteID.length > 0) {
    fetchAllFavorite();
  } else {
    setFavoriteRecipes([]);
    setLoading(false);
  }

  },[favoriteID])

  

  return (
    <div>
      {
        favoriteRecipes.length > 0 ? 
        
        favoriteRecipes.map((data,index)=>(
          <RecipeCard 
                key={index}  
                publisher={data.publisher} 
                image_url={data.image_url} 
                title={data.title} 
                id={data.id}
                />
        ))
      
        
        
        : <h1>No favorites</h1>
      }
    </div>
  )
}

export default Favorite