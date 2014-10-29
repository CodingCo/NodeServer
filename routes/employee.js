var express = require('express');
var db = require('../database/access-database');
var router = express.Router();


router.get('/:id', function (request, response) {
    var employID = request.params.id;
    console.log(employID);

    db.getEmployee(employID, function (err, employee) {
        if (err) {
            response.render('error', {message: err})
        }
        response.render('template', {employee: employee})
    })
});


module.exports = router;
