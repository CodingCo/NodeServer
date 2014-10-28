var express = require('express');
var router = express.Router();


router.get('/', function (request, response) {


    response.render('index', {data: [1, {name:"simon"}, 3, 4, 5, 6, 67, 7, 8, 8]});

});


module.exports = router;
