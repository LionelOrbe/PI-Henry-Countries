import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import Header from '../Header/Header';
import { getActivities, postActivity } from '../../redux/actions';



export default function CreateActivity() {
  const dispatch = useDispatch()
  const {countries} = useSelector((state) => state)
  
  const [input, setInput] = useState({
    name:"",
    difficulty:"",
    duration:"",
    season:"",
    countries:[]
    })

  const [, setErrors] = useState({});

  useEffect(()=>{
    dispatch(getActivities())
  },[dispatch])

  function handleName(e) {
    e.preventDefault()
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });

  }
  
  function handleCountry(e) {
    setInput({
      ...input,
      countries: [...input.countries, e.target.value]
    })
  }
  
  function handleSeason(e) {
    setInput({
      ...input,
      season: e.target.value
    })
  }
  
  function handleDelete(e) {
    setInput({
      ...input,
      countries: input.countries.filter(el => el !== e)
    })
  }

  function handleDifficulty(ev) {                               
    setInput({
        ...input,
        difficulty: ev.target.value
    })
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(postActivity(input))
    setInput({
      name:"",
      difficulty:"",
      duration:"",
      season:"",
      countries:[]
    })

    setErrors (validate({
      ...input,
      [e.target.value]: e.target.value
      }))
  }

  function handleDuration(ev) {                               
    setInput({
        ...input,
        duration: ev.target.value
    })
  }


  return (
    <div>
      <Header/>
      <div>Create Activity</div>
      <div>
        <form>
            <div>
                <label>Activity Name: </label>
                <input type = 'text' value = {input.name} name ='name'
                onChange={(e) => handleName(e)}></input>
            </div>
            <div>
                <label>Difficulty(1 to 5): </label>
                <input type="range" list="difficulty" min='1' max='5' step='1' name ='difficulty'
                  onChange = {(ev) => handleDifficulty(ev)}></input>
                <datalist id="difficulty">
                  <option value="1"></option>
                  <option value="2"></option>
                  <option value="3"></option>
                  <option value="4"></option>
                  <option value="5"></option>
                 
                                  
                </datalist>
                
            </div>

            <div>
                <label>Duration(0.5 to 8h.): </label>
                <input type="range" list="tickmarks2" min='0.5' max='8' step='0.5' name ='duration'
                  onChange={(e) => handleDuration(e)}></input>
                <datalist id="tickmarks2">
                  <option value="0"></option>
                  <option value="1"></option>
                  <option value="2"></option>
                  <option value="3"></option>
                  <option value="4"></option>
                  <option value="5"></option>
                  <option value="6"></option>
                  <option value="7"></option>
                  <option value="8"></option>
                </datalist>
            </div>
                <div>
                    <label>Season: </label>
                    <select onChange={(ev) => handleSeason(ev)}>
                    <option value ='spring'>Spring</option>
                    <option value ='summer'>Summer</option>
                    <option value='fall'>Fall</option>
                    <option value='winter'>Winter</option>
                    <option value='any'>All year</option>
                    </select>
                </div>
            <label>Paises: <select onChange = {(ev) => handleCountry(ev)}>
                    {countries.map((ev)=>(
                        <option value ={ev.id} >{ev.name} </option>
                    ))}
            </select></label>
            <button type='submit' onClick={(ev) => handleSubmit(ev)}>Add Activity</button>
        </form>
        {input.countries.map(el=>
            <div>
            <h6>{el}</h6>
            <button onClick={(el)=> handleDelete(el)}>x</button>
            </div>)}
      </div>
    </div>
  )
}

function validate(input) {
  if(!input.name){
      alert("Name is required") 
  }else if(!input.dificulty){
      alert ("Dificulty is required")
  }else if(!input.season){
     alert ("Please select season")
  }else if(input.countries.length < 1){
     alert ("Please select the countries where this activity is practiced")
  }
}