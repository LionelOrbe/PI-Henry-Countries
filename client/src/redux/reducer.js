const initialState = {
    allCountries: [],  // aca van todos los paises traidos de la DB
    countries: [],  // paises seleccionados 
    activities: [],
    detail: {}
}

export default function Reducer (state = initialState, {type, payload}) {
    switch(type){
        case "GET_COUNTRIES": return {
            ...state,
            countries: payload,
            allCountries: payload
        }
        case "GET_COUNTRY_DETAIL": return {
            ...state,
            detail: payload
        }
        case "GET_SEARCH": return {
            ...state,
            countries: payload
        }
        case "GET_ACTIVITIES": return {
            ...state,
            activities : payload
        }
        case "POST_ACTIVITY": return {
            ...state
        }
        case "FILTER_BY_CONTINENT": 

        const allCountries = state.allCountries;
        const filteredC = (payload === 'All') ? allCountries : allCountries.filter(e => e.continent === payload);

        return {
            ...state,
            countries: filteredC
        }
        case "FILTER_BY_ACTIVITY": 

        const filteredA = []
        if(payload === 'All') return state;
        state.allCountries.map(coun => coun.activities.forEach(act => {
        if (act.name === payload) {
            filteredA.push(coun)
            }
        }))

        return {
            ...state,
            countries: filteredA
        }
        case "ORDER_ALFA":
        
        const orderedAlfa = (payload === "asc") ? state.countries.sort((a,b) => {
            if (a.name > b.name) {
                return 1;     
                }
            if (b.name > a.name) {
                return -1;
                }
                return 0;
            }) :

            state.countries.sort((a,b) => {
            if (a.name > b.name) {
                return -1;
                }
            if (b.name > a.name) {
                return 1;
                }
                return 0;
            })

        return {
            ...state,
            countries: orderedAlfa
        }
        case "ORDER_BY_POPULATION": 

        const orderPop = (payload === "asc") ? state.countries.sort((a,b) => a.population - b.population) :
            state.countries.sort((a,b) => b.population - a.population)

        return {
            ...state,
            countries: orderPop
        }
    default: return state
    }
}




