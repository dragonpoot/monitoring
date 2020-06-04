const router = require('express').Router();
//rutas
router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;