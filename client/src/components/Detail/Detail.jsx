import React from 'react'
import Header from '../Header/Header'
import {getCountryDetail} from '../../redux/actions'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


export default function Detail(props) {

  const id = props.match.params.id; 
  const dispatch =  useDispatch()
  useEffect(()=>{
    dispatch(getCountryDetail(id))
  },[dispatch, id])

  const country = useSelector((state)=> state.detail)

  return (
    <div>
    <Header/>
    <div>
    {
      country?
          <div>
              <h1>{country.name}</h1>
              <img src = {country.flag} alt={country.name} width='250px' height='175px' />
              <h2>Continent: {country.continent}</h2>
              <h3>Capital: {country.capital}</h3>
              <h4>Subregion: {country.subregion}</h4>
              <h5>Area: {country.area} km2</h5>
              <h5>Population: {country.population}</h5>
              <div>{country.activities?.map(e => {
                return(
                <div>
                <h6>Activity: {e.name} </h6>
                
                <h6>Dificulty: {e.dificulty} </h6>
                
                <h6>Season: {e.season} </h6>
               
                <h6>Duration: {e.duration}</h6>
                </div>
                      )
                    }
                  )
                }
              </div>
          </div> : <p>Country not Found</p>
        }
    <Link to='/home'><button>Back</button></Link>
    </div>
    </div>
  )
}
