const { Country, Activity } = require ('../db');
const { Op } = require('sequelize')

const postActivityDB = async (req, res, next) => {
    try {
        const {name, difficulty, duration, season, countries} = req.body
        if(name && difficulty && duration && season && countries){
            const activity = await Activity.create({
                    name,
                    difficulty,
                    duration,
                    season         
                });

            countries.forEach(async (id) => {
                const country = await Country.findOne({
                    where: {id: {[Op.iLike]:`%${id}%`}}
                        })
                await country?.addActivity(activity);
            })

            return res.send(activity)
        } else {
            return res.status(404).json('Missing data')
        }
    } catch (error) {
        next(error)
    }
}

async function getAllActivities(req, res, next){
    try {
        res.json(await Activity.findAll({}))
        
    } catch (error) {
        next(error);
    }
        
}

module.exports = {
    postActivityDB,
    getAllActivities
}