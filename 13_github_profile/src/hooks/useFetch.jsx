import { useState } from "react";


export default function useFetch(){
    const [data, setData] = useState({})

    const getData = async (username) =>{
        
        const response = await fetch(`https://api.github.com/users/${username}`)
        const result =  await response.json()
        
        setData(result)
        
    }


    return [data, getData]
}