var express = require('express');
var db = require('../database/access-database');
var router = express.Router();


router.get('/:id', function (request, response) {
    var customerID = request.params.id;
    console.log(customerID);
    db.connect();
    db.getCustomer(customerID, function (err, customer) {
        if (err) {
            console.log(err);
            response.send(err);
            db.close();
            return;
        }

        response.render('user', {customer: customer});
        db.close();
    })
});

module.exports = router;