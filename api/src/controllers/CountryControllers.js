const {Country, Activity} = require("../db");
const axios = require ('axios');
const {Op} = require('sequelize');

async function getAllCountriesAPI(){

    try {
        let countries = (await axios.get(`https://restcountries.com/v3/all`)).data.map(e=>{
                    return {
                      id: e.cca3,
                      name: e.name.common,
                      flag: e.flags[0],
                      continent: e.region,
                      capital: (!e.capital) ? 'undefined' : e.capital[0],
                      subregion: e.subregion,
                      area: e.area,
                      population: e.population,
                            } })
                        
            await Country.bulkCreate(countries);
            console.log('Countries successfully loaded into DB');
                                 
    } catch (error) {
        console.log(error);
    }     
}

async function getAllCountriesDB(req, res, next){

    try {
        let allcount = await Country.findAll({include: {model: Activity}})
        res.json(allcount)  
        
    } catch (error) {
        next(error);
    }
}

async function getCountryQ(req, res, next){
    let name = req.query.name;
    if (name) {
        try {
        let countryQ = await Country.findAll({
            include: {model: Activity},
            where:{name:{[Op.iLike]: '%' + name + '%'}}})
        if (!countryQ.length) {
            return res.status(404).json('Country not found!')
        } else {
            return res.json(countryQ)
        }
        } catch(error){
            next(error);
        }
    } else getAllCountriesDB(req, res, next);
}

async function getCountryP(req, res, next){
    const {id} = req.params;
    try{
        if (id.length == 3) {
            var countryID = await Country.findOne({where: {id: id.toUpperCase()}, include: Activity})
            if (countryID) {
                return res.json(countryID)
                      }
            return res.send("There is no country for the entered ID")
        }
        return res.send("Wrong country ID")
    }catch(error){
        next(error);
    }
}

module.exports= {
    getAllCountriesAPI,
    getAllCountriesDB,
    getCountryQ,
    getCountryP
}