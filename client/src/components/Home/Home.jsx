import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCountries, getActivities} from '../../redux/actions'
import Card from '../Cards/Card';
import Header from '../Header/Header';
import Pagination from '../Pagination/Pagination';
import {Link} from 'react-router-dom';
import style from '../Home/Home.module.css'


export default function Home() {
  
const dispatch = useDispatch();
const {countries} = useSelector(state => state);
const [currentPage, setcurrentPage] = useState(1); // se inicia en la primera pagina
let cpp = 10;   //cantidad de cards que se van a mostrar por pagina
// if (currentPage === 1) {cpp= 9 }
// if (currentPage >= 2) {cpp =10 }
var lastCountry = currentPage * cpp;
var firstCountry = lastCountry - cpp;
var currentCountriesPage = countries.slice(firstCountry, lastCountry);
const pagination = (PageNumber)=>{setcurrentPage(PageNumber)}


useEffect(()=>{
  dispatch(getCountries())
  dispatch(getActivities())
 },[dispatch]);



  return (
    <div className={style.container}>

      <Header/>
      <Pagination
          cpp = {cpp}
          countries={countries.length}
          pagination={pagination}>
      </Pagination>
      <div> </div>
      <div className={style.cardscontainer}>
        {currentCountriesPage?.map(el => {
        return(
        <div key={el.id}  >
          
        <Link to= {`/home/${el.id}`}>
        <Card name={el.name} continent={el.continent} flag={el.flag} population={el.population}/>
        </Link>
        </div>
        )})}
      </div>
    </div>
  )
}
