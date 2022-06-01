import React from 'react'
import style from '../Cards/Card.module.css'

export default function Card({name, flag, continent, population}) {
  return (
    <div >

        <div className = {style.container}>
          <div className = {style.container2}>
            <div className={style.name}>{name}</div>
            <img className={style.flag} src={flag} alt='country flag'/>
            <div className={style.details}>Cont.: {continent}</div>
            <div className={style.details}>Pop.: {population}</div>
          </div>
        </div>
    </div>
  )
}
