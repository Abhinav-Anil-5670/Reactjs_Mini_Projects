import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({children}) {
    const [seachParam, setSearchParam] = useState('')
    const [loading, setLoading] = useState(false)
    const [recipeList, setRecipeList] = useState([])

    //Favorites
    const [favoriteID, setFavouriteID] = useState([])


    async function handleSubmit(){
        try{
            setLoading(true)
            const response = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${seachParam}`)
            const result = await response.json()
            console.log(result)
            setRecipeList(result?.data?.recipes || [])
            setLoading(false)
            setSearchParam("")
        }
        catch(err){
            setLoading(false)
            console.log(err)
        }
    }

     const handleFavorite = (id) =>{
    setFavouriteID((prev)=>{
      if(prev.includes(id)){
        return prev.filter((existingId)=> existingId != id)
      }
      else{
        
        return [...prev,id]
      }
    })
  }

    

    return (
        <GlobalContext.Provider value={{seachParam, setSearchParam,handleSubmit, loading, recipeList,favoriteID, setFavouriteID, handleFavorite}}>

            {children}
        </GlobalContext.Provider>
    )
}