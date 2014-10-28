var express = require('express');
var db = require('../database/accessDatabase');
var router = express.Router();

router.get('/', function (request, response) {
    db.connect();
    db.getAllOrders(function (err, data) {
        if (err) {
            response.send("No data was found");
        }
        response.send(data);

    });
    //response.render('index', {data: [1, {name: "simon"}, 3, 4, 5, 6, 67, 7, 8, 8]});

});


module.exports = router;
