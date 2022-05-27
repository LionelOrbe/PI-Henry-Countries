import React from 'react'
import style from '../Cards/Card.module.css'

export default function Card({name, flag, continent, population}) {
  return (
    <div >

        <div className = {style.container}>
          <h3 className={style.name}>{name}</h3>
          <img className={style.flag} src={flag} alt='flag image' width='250px' height='175px'/>
          <h3>{continent}</h3>
          <h3>{population}</h3>
        </div>
    </div>
  )
}
