import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCountries} from '../../redux/actions'
import Card from '../Cards/Card';
import Header from '../Header/Header';
import Pagination from '../Pagination/Pagination';


export default function Home() {
  
const dispatch = useDispatch();
const {countries, allCountries} = useSelector(state => state);
useEffect(()=>{
  dispatch(getCountries())
},[dispatch]);

  return (
    

    <div>
     
      <p>Home</p>
      <Header/>
      <Card name= 'Pais de Prueba' continent='continente' population='poblacion' flag={"https://flagcdn.com/ar.svg"}/>
      <Pagination/>
    </div>
  )
}
