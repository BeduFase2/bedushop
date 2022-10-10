let router = require('express').Router();

router.get('/', (req, res)=>{
    res.send('Welcome to bedushop api');
});

router.use('/user', require('./users'));
router.use('/products', require('./products'));
router.use('/sales', require('./sales'));

module.exports = router;