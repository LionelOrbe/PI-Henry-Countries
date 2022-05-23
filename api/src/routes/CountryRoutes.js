const { Router } = require('express');
const {getAllCountriesDB} = require('../controllers/CountryControllers')

const router = Router();

router.use('/', getAllCountriesDB);


       



module.exports = router;