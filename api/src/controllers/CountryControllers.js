const {Country, Activity} = require("../db");
const axios = require ('axios');

async function getAllCountriesAPI(){

    try {
        let countries = (await axios.get(`https://restcountries.com/v3/all`)).data.map(e=>{
                    return {
                      id: e.cca3,
                      name: e.name.common,
                      flag: e.flags[0],
                      continent: e.region,
                      capital: (e.capital === undefined || e.capital.lenght < 1) ? 'undefined' : e.capital[0],
                      subregion: e.subregion,
                      area: e.area,
                      population: e.population,
                      region: e.region
                        } })
                        
            await Country.bulkCreate(countries);
            console.log('Countries successfully loaded into DB');
                                 
    } catch (error) {
        console.log(error);
    }     
}

async function getAllCountriesDB(req, res, next){

    try {
        let allcount = await Country.findAll()
        res.send(allcount)  
        
    } catch (error) {
        next(error);
    }
}


module.exports= {
    getAllCountriesAPI,
    getAllCountriesDB
}