var express = require('express');
var db = require('../database/accessDatabase');
var router = express.Router();

router.get('/', function (request, response) {
    db.connect();
    db.getAll(function (err, data) {
        if (err) {
            response.send(err);
        }
        response.send(data);

    });
});


module.exports = router;
