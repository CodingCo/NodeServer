var express = require('express');
var db = require('../database/accessDatabase');
var router = express.Router();

router.get('/', function (request, response) {
    db.connect();
    db.getAll(function (err, data) {
        if (err) {
            response.send(err);
            db.close();
        }

        console.log("The data looks like: " + data.length);

        response.render('order-viewer', {data:data});
        db.close();
    });


});

module.exports = router;
