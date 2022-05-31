import React from 'react'
import style from '../Pagination/Pagination.module.css'


export default function Pagination({cpp, countries, pagination}) {

  const PageNumber =[]

    for (let i=1; i<=Math.ceil(countries/cpp); i++) {
        PageNumber.push(i)
    }

    return(
        <nav>
            <ul >
                {PageNumber?.map(n =>(
                <button className={style.button} key={n} onClick={()=> pagination(n)}>{n}</button>
                ))}
            </ul>
        </nav>
    )
 
}
