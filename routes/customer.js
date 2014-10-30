var express = require('express');
var db = require('../database/access-database');
var router = express.Router();


router.get('/:id', function (request, response) {
    var customerID = request.params.id;

    request.db.getCustomer(customerID, function (err, customer) {
        if (err) {
            response.send(err);
        }
        response.render('user', {customer: customer});
    })
});

module.exports = router;