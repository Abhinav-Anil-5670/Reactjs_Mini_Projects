import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router'
import { GlobalContext } from '../context/Global'

const Navbar = () => {
    const {seachParam, setSearchParam, handleSubmit} = useContext(GlobalContext)
    

  return (
    <nav className="flex justify-between items-center py-6 px-8 mx-auto max-w-7xl">
        <input 
        value={seachParam}
            type="text" 
            placeholder="Search for recipes..."
            className="bg-white p-3 px-6 rounded-full outline-none shadow-md shadow-gray-200 focus:shadow-gray-300 w-80 transition-shadow"
            onChange={(e)=>setSearchParam(e.target.value)} 
        />
        <ul className="flex gap-8 text-gray-700 font-semibold text-lg">
            <li>
                <NavLink to={'/'} className="hover:text-orange-500 transition-colors">Home</NavLink>
            </li>
            
            <li>
                <NavLink to={'/favourite'} className="hover:text-orange-500 transition-colors">Favourite</NavLink>
            </li>
        </ul>
        <button 
            className="bg-gray-900 text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-700 transition-colors"
            onClick={()=>handleSubmit()}
        >
            Search
        </button>
    </nav>
  )
} 

export default Navbar