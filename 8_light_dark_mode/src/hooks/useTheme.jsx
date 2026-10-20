import React, { useEffect, useState } from 'react'

export function useTheme() {

    const [theme,setTheme ] = useState(()=>{
        const savedTheme = localStorage.getItem("theme")
        return savedTheme === "light" ? "light" : "dark"
    })

    useEffect(()=>{
        localStorage.setItem('theme',theme)

        if(theme === "dark"){
            document.body.classList.add("dark-mode")
        }
        else{
            document.body.classList.remove("dark-mode")
        }
    },[theme])

    const toggleChange = ()=>{
        setTheme((prev)=>{
            return prev === "light" ? "dark" : "light"
        })
    }

  return [theme,toggleChange]
}

