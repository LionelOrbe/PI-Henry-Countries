import React from 'react'
import { useDispatch } from "react-redux";
import { getSearch } from "../../redux/actions";

export default function SearchBar() {

  const dispatch = useDispatch()
  function hadleInputChange(e){
  // e.preventDefault()
    dispatch(getSearch(e.target.value))
}



  return (
    
    <div>
        <input type = 'text' placeholder = 'Search country...' onChange= {(e)=> hadleInputChange(e)}/>
  
    </div>
  )
}
