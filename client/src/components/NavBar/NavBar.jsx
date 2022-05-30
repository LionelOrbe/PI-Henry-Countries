import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { filterByContinent, filterByActivity, orderPopul, orderAlfa, getCountries,getActivities } from '../../redux/actions'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import { useEffect } from 'react';



export default function NavBar() {
  
 
  const dispatch = useDispatch()
  const {activities} = useSelector(state => state);

  function handleFilterContinent(e){
    dispatch(filterByContinent(e.target.value))
      }

  function handleFilterActivity(e) {
    dispatch(filterByActivity(e.target.value)) 
    }

  function handleOrderPop(e){
    dispatch(orderPopul(e.target.value))
    }
  function handleResetClick(e){
    dispatch(getCountries())
    }
  function handleOrderAlfa(e){
    dispatch(orderAlfa(e.target.value))    
    }
  
  return (
    <div>
      <div>NavBar</div>
        

      <SearchBar/>
      <select onChange = {e => handleFilterContinent(e)} >
        <option value ='All' key='All'>Show all</option>
        <option value='Americas' key='Am'>Americas</option>
        <option value='Africa' key='Af'>Africa</option>
        <option value ='Asia' key='As'>Asia</option>
        <option value='Europe' key='Eu'>Europa</option>
        <option value='Oceania' key='Oc'>Oceania</option>
      </select>
        {(activities.length === 0)? <p>Create activities to use activity filter</p>
      : <select onChange = {e => handleFilterActivity(e)}>
      <option value = 'All'>Select activity</option>  
      {activities.map((e)=>(
      <option value = {e.name} key={e.id}> {e.name} </option>
        ))
      
    }
    </select>
    }
    <Link to = '/activity'><button>Create Activity</button></Link>

    <select onChange ={e => handleOrderPop(e)}>
      <option value="" >Choose population order</option>
        <option value ='asc' key='asc'>Lowest poppulation first</option>
        <option value ='des' key='des'>Largest population first</option>
    </select>
    <button onClick={e=> handleResetClick(e)}>Reset filters</button>

    <select onChange ={e => handleOrderAlfa(e)}>
    <option value ='asc' key='asc'>A-Z</option>
    <option value ='des' key='des'>Z-A</option>
    </select>
    </div>




    )
}
