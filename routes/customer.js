var express = require('express');
var db = require('../database/accessDatabase');
var router = express.Router();


router.get('/customer:id', function (request, response) {
    var customerID = request.params.id;
    console.log(customerID);
    db.getCustomer(customerID, function (err, customer) {
        if (err) {
            response.render('error', {message: err})
        }
        response.render('temp', {customer: customer});
    })
});

module.exports = router;