import { useState } from "react";


export default function useFetch(){
    const [data, setData] = useState({})
    const [not, setNot] = useState(false)

    const getData = async (username) =>{
        
       try{
         const response = await fetch(`https://api.github.com/users/${username}`)
            const result =  await response.json()
            if (!response.ok) {
                throw new Error("User not found")
            }
            setData(result)
            setNot(false)
       }
        catch(err){
            console.log(err)
            setData({})
            setNot(true)
        }
        
    }


    return [data, getData, not]
}