const { Router } = require('express');
const CountryRoutes = require('./CountryRoutes')
const ActivityRoutes = require('./ActivityRoutes')


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use('/countries', CountryRoutes);
router.use('/activity', ActivityRoutes);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
