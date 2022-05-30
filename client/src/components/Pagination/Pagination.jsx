import React from 'react'


export default function Pagination({cpp, countries, pagination}) {

  const PageNumber =[]

    for (let i = 1; i <= Math.ceil(countries/cpp); i++) {
        PageNumber.push(i)
    }

    return(
        <nav>
            <ul>
                {PageNumber?.map(n =>(
                <button key={n} onClick={()=> pagination(n)}>{n}</button>
                ))}
            </ul>
        </nav>
    )
 
}
