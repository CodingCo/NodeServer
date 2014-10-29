var express = require('express');
var db = require('../database/accessDatabase');
var router = express.Router();


router.get('/employee/:id', function (request, response) {
    var employID = request.params.id;
    console.log(employID);

    //TODO: change to find employee
    db.getCustomer(employID, function (err, employee) {
        if (err) {
            response.render('error', {message: err})
        }
        response.render('template', {employee: employee})
    })
});


module.exports = router;
