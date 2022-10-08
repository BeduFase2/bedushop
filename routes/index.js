let router = require('express').Router();

router.get('/', (req, res)=>{
    res.send('Welcome to bedushop api');
});

router.use('/products', require('./products'));

module.exports = router;