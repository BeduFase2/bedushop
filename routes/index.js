let router = require('express').Router();

router.get('/', (req, res)=>{
    res.send('Welcome to bedushop api');
});

router.use('/products', require('./products'));
router.use('/user', require('./users'));

module.exports = router;