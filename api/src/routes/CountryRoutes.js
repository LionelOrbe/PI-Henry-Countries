const { Router } = require('express');
const {getCountryP, getCountryQ} = require('../controllers/CountryControllers')

const router = Router();

router.get('/:id', getCountryP);
router.get('/', getCountryQ);


       



module.exports = router;