const  Router  = require('express');
const {postActivityDB, getAllActivities} = require('../controllers/ActivityControllers')

const router = Router();

router.post('/', postActivityDB);
router.get('/', getAllActivities);


       



module.exports = router;