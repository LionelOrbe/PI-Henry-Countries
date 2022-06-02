import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import Header from '../Header/Header';
import { getActivities, getCountries, postActivity } from '../../redux/actions';
import style from '../CreateActivity/CreateActivity.module.css'
import { Link } from 'react-router-dom';



export default function CreateActivity() {
  const dispatch = useDispatch()
  const {allCountries} = useSelector((state) => state)
  
  const [input, setInput] = useState({
    name:"",
    difficulty:"",
    duration:"",
    season:"",
    countries:[]
    })

  const [errors, setErrors] = useState({});

  useEffect(()=>{
    dispatch(getCountries())
    dispatch(getActivities())
  },[dispatch])

  function handleName(e) {
    e.preventDefault()
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  }
  
  function handleCountry(e) {
    setInput({
      ...input,
      countries: [...input.countries, e.target.value]
    })
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  }
  
  function handleSeason(e) {
    setInput({
      ...input,
      season: e.target.value
    })
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  }
  
  function handleDelete(e) {
    setInput({
      ...input,
      countries: input.countries.filter((el) => el !== e)
    })
  }

  function handleDifficulty(e) {                               
    setInput({
        ...input,
        difficulty: e.target.value
    })
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  }
  
  function handleDuration(ev) {                               
    setInput({
        ...input,
        duration: ev.target.value
    })
  }
  
  function handleSubmit() {
    
    dispatch(postActivity(input))

    setInput({
      name:"",
      difficulty:"",
      duration:"",
      season:"",
      countries:[]
    })
    if(input.name) window.alert("Activity successfully created"); 
  }



  return (
    <div className={style.container}>
      <Header/>
      <div className={style.cardcontainer}>

      <div className={style.title}>Create Activity</div>
      <div>
        <form>
            <div>
                <label className={style.atribute}>Activity Name: </label>
                <input className={style.input} type = 'text' value = {input.name} name ='name'
                onChange={(e) => handleName(e)}></input>
                {/* {errors.name && (<p className={style.pdanger}>{errors.name}</p>)} */}
            </div>
            <div>
                <label className={style.atribute}>Difficulty(1 to 5): </label>
                <input className={style.input} type="range" list="difficulty" min='1'max='5' step='1' name ='difficulty'
                  onChange = {(ev) => handleDifficulty(ev)}></input>
                  {/* {errors.difficulty && (<p className={style.pdanger}>{errors.difficulty}</p>)} */}
                  <label className={style.atribute}>  {input.difficulty}</label>
                <datalist id="difficulty">
                  <option value='1' key={1}></option>
                  <option value='2' key={2}></option>
                  <option value='3'key={3}></option>
                  <option value='4'key={4}></option>
                  <option value='5'key={5}></option>
                 
                                  
                </datalist>
                
            </div>

            <div>
                <label className={style.atribute}>Duration(0.5 to 8h.): </label>
                <input className={style.input} type="range" list="duration" min='0.5' max='8'step='0.5' name ='duration'
                  onChange={(e) => handleDuration(e)}  ></input>
                <label className={style.atribute}>  {input.duration} h.</label>
                <datalist id="duration">
                  <option value="0" key='0'></option>
                  <option value="1" key='1'></option>
                  <option value="2" key='2'></option>
                  <option value="3" key='3'></option>
                  <option value="4" key='4'></option>
                  <option value="5" key='5'></option>
                  <option value="6" key='6'></option>
                  <option value="7" key='7'></option>
                  <option value="8" key='8'></option>
                </datalist>
            </div>
                <div>
                  {/* {errors.duration && (<p className={style.pdanger}>{errors.duration}</p>)} */}
                    <label className={style.atribute}>Season: </label>
                    <select className={style.input} onChange={(ev) => handleSeason(ev)}>
                    <option value ='y' key='x' selected disabled hidden>Select season</option>
                    <option value ='spring' key='spring'>Spring</option>
                    <option value ='summer' key='summer'>Summer</option>
                    <option value='fall' key='fall'>Fall</option>
                    <option value='winter' key='winter'>Winter</option>
                    <option value='any' key='any'>All year</option>
                    </select>
                    {/* {errors.season && (<p className={style.pdanger}>{errors.season}</p>)} */}
                </div>
            <label className={style.atribute}>Countries: <select className={style.input} onChange = {(ev) => handleCountry(ev)}>
                    <option value ='s' key='z' selected disabled hidden>Select Countries</option>
                    {allCountries.map((c)=>(
                        <option value ={c.id} key={c.name}>{c.name} </option>
                    ))}
            </select></label>
        </form>
            <div className={style.buttonscontainer}>
            <Link to = '/home'><button className={style.button}>Back</button></Link>
            <button className={style.button} type='submit' onClick={(ev) => handleSubmit(ev)} disabled={!(Object.keys(errors).length===0)}>Add Activity</button>
            </div>
            <p className={style.pdanger}>{errors.name}  {errors.difficulty}  {errors.duration } {errors.season}  {errors.countries}</p>
        <div className={style.countrycontainer}>
          {input.countries.map(c=>
            <div className={style.country}>
            <div key={c}>{c}</div>
            <button className={style.close} onClick={() => handleDelete(c)}>x</button>
            </div>)}
        </div>             
      </div>
      </div>
    </div>
  )
}

function validate(input) {
  let errors = {};
  if(!input.name){
    errors.name ="Name is required"
  } else if (!/^[A-Za-z]+$/.test(input.name)) {
    errors.name = 'Activity name is invalid';
  } else if(!input.difficulty){
    errors.difficulty ="Dificulty is required"
  } else if(!input.season){
    errors.season ="Please select season"
  } else if(input.countries.length < 1){
    errors.countries ="Please select the countries where this activity is practiced"
  }
  return errors;
}