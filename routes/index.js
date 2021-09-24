var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', author: 'Isaac Estrada' });
});

router.get('/greeting', function(req, res, next){
  res.send('Estas creando una nueva ruta PWPCII')
})

module.exports = router; 
