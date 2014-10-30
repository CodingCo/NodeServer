var express = require('express');
var db = require('../database/access-database');
var router = express.Router();


router.get('/:id', function (request, response) {
    var employID = request.params.id;
    console.log(employID);
    db.connect();
    db.(employID, function (err, employee) {
        if (err) {

            response.render('error', {message: err});
            db.close();
        }
        response.render('user', {employee: employee});
        db.close();
    })
});


module.exports = router;
