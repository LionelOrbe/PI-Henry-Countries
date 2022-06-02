import React from 'react'
import style from '../NotFound/NotFound.module.css'


export default function NotFound() {
  return (
    <div className={style.container}>
      <div className={style.title}> ERROR 404!</div>
      <div className={style.frase}>Ups! something is wrong in our trip!</div>
      
    </div>
  )
}
