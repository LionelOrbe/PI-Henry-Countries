import axios from 'axios';


export function getCountries() {
    return async function (dispatch) {
        var countries = await axios.get("http://localhost:3001/countries");
        return dispatch({
            type:'GET_COUNTRIES',
            payload: countries.data
        })
    }
}

export function getCountryDetail(id){
    return dispatch => {
        return fetch(`http://localhost:3001/countries/${id}`)
        .then(res => res.json())
        .then(json => dispatch({
            type: 'GET_COUNTRY_DETAIL',
            payload: json
            }
        ))
    }
}

export function clearDetail(){
    return {
        type: "CLEAR_DETAIL"
    }
}

export function getSearch(name) {
    return async function (dispatch) {
        try {
            var country = await axios.get(`http://localhost:3001/countries?name=${name}`)
            return dispatch ({
                type : "GET_SEARCH",
                payload : country.data
            })
        } 
        catch(error){
            console.log(error);
        }
    }
}

export function getActivities() {
    return async function (dispatch) {
        var activities = await axios.get("http://localhost:3001/activities");
        return dispatch({
            type:'GET_ACTIVITIES',
            payload: activities.data
        })
    }
}

export function postActivity(body) {
    return async function (dispatch) {
        var activity = await axios.post("http://localhost:3001/activity", body);
        return dispatch({
            type : 'POST_ACTIVITY',
            payload : activity.data
        })
    }
}

export function filterByContinent(continent) {
    return {
        type:'FILTER_BY_CONTINENT',
        payload: continent
    }
}

export function filterByActivity(activity) {
    return {
        type: 'FILTER_BY_ACTIVITY',
        payload: activity
    }
}

export function orderAlfa(payload) {
    return{
        type: 'ORDER_ALFA',
        payload
    }
}

export function orderPopul(payload) {
    return{
        type: 'ORDER_BY_POPULATION',
        payload
    }
}
