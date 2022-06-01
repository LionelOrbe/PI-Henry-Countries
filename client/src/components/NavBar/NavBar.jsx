import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { filterByContinent, filterByActivity, orderPopul, orderAlfa, getCountries } from '../../redux/actions'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from '../NavBar/NavBar.module.css'

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
    <div className={style.container}>
      <SearchBar/>
      <div>
        <div className={style.title} >Order by Continent</div>
        <select className={style.input} onChange = {e => handleFilterContinent(e)} >
          <option value ='All' key='All'>Show all</option>
          <option value='Americas' key='Am'>Americas</option>
          <option value='Africa' key='Af'>Africa</option>
          <option value ='Asia' key='As'>Asia</option>
          <option value='Europe' key='Eu'>Europa</option>
          <option value='Oceania' key='Oc'>Oceania</option>
        </select>
      </div>
      <div>
        <div className={style.title} >Order by population</div>
        <select className={style.input} onChange ={e => handleOrderPop(e)}>
          <option value="" >Choose order</option>
            <option value ='asc' key='asc'>Lowest poppulation first</option>
            <option value ='des' key='des'>Largest population first</option>
        </select>
      </div>
      <div>
        <div className={style.title} >Alphabetical order</div>
        <select  className={style.input} onChange ={e => handleOrderAlfa(e)}>
        <option value="" >Choose order</option>
        <option value ='asc' key='asc'>A-Z</option>
        <option value ='des' key='des'>Z-A</option>
        </select>
      </div>
      <div>
        <button onClick={e=> handleResetClick(e)} className={style.button}>Reset filters</button>
      </div>
    <div className={style.actcontainer}>
      <div className={style.title}>Activities</div>
      <div >
        {(activities.length === 0)? <p>Create activities to filter</p>
          : <select className={style.input} onChange = {e => handleFilterActivity(e)}>
          <option value = 'All'>Select activity</option>  
          {activities.map((e)=>(
            <option value = {e.name} key={e.id}> {e.name} </option>
            ))
          }
          </select>
        }
      </div>
      <Link to = '/activity'><button className={style.button}>Create Activity</button></Link>
    </div>


      </div>




    )
}
