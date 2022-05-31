import React from 'react'
import {Link} from 'react-router-dom';
import style from './Landing.module.css'

export default function Landing() {
  return (
    <div className={style.container}>
      <div className={style.title}>COUNTRIES APP</div> 
      <div className={style.frase}>The whole world just a click away!</div>
        <Link to = '/home'>
      <button className={style.enter}>Enter</button>

        </Link>


    </div>
  )
}
