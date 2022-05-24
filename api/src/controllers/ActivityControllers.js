const {Activity, Country} = require('../db')

async function postActivityDB(req, res, next){

    const { name,difficulty,duration,season,id } = req.body

    try {
        if(name && difficulty && duration && season){
            let actCreated = await Activity.create({
                    name,
                    difficulty,
                    duration,
                    season,
                })

            try {
                let country = await Country.findAll({where:{id : [id]}})
                    await actCreated.addCountries(country)
                    res.send(country)
            } catch (error) {
                next(error);
                        }
                    }
        else {
            res.status(404).send("Activity not created (missing data)")
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