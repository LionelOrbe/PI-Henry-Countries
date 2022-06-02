import React from 'react'
import Header from '../Header/Header'
import {getCountryDetail} from '../../redux/actions'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import style from './Detail.module.css'


export default function Detail(props) {

  const id = props.match.params.id; 
  const dispatch =  useDispatch()
  useEffect(()=>{
    dispatch(getCountryDetail(id))
  },[dispatch, id])

  const country = useSelector((state)=> state.detail)

  return (
    <div className={style.container}>
      <Header/>
      <div className={style.cardcontainer}>
        <div className={style.countrycontainer}>
          <div className={style.card}>
            <img className={style.flag} src = {country.flag} alt={country.name}/>
            <div className={style.name}>{country.name}</div>
            <div className={style.info}>Continent: {country.continent}</div>
            <div className={style.info}>Capital: {country.capital}</div>
            <div className={style.info}>Subregion: {country.subregion}</div>
            <div className={style.info}>Area: {country.area} km2</div>
            <div className={style.info}>Population: {country.population}</div>
          </div> 
          <div>
            <div className={style.name}>Country Activities: </div>
            {country.activities?.map(e => {
            return(
            <div className={style.actcard}>
              <div className={style.name}>Activity: {e.name} </div>
              <div className={style.info}>Difficulty: {e.difficulty} </div>
              <div className={style.info}>Season: {e.season} </div>
              <div className={style.info}>Duration: {e.duration} h</div>
            </div>
                      )}) 
             }
          </div>
        </div>
          <Link to='/home'><button  className={style.button}>Back</button></Link>
      </div>
    </div>
  )
}
