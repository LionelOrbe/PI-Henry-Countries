import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import Header from '../Header/Header';



export default function CreateActivity() {
  const dispatch = useDispatch()

  const [input, setInput]=useState({
    name:"",
    difficulty:"",
    duration:"",
    season:"",
    countries:[]
})


  return (
    <div>
      <Header/>
      <div>CreateActivity</div>
    </div>
  )
}
