var express = require('express');
var router = express.Router();


router.get('/', function (request, response) {
    request.db.getAllOrder(function (err, data) {
        if (err) {
            response.send(err);
        }
        response.render('order-viewer', {data: data});
    });
});

router.get('/:page/:results', function (request, response) {
    var numberOfResults = request.params.page;
    var currentPage = request.params.results;

    request.db.getAdvancedDetail(currentPage, numberOfResults, function (err, data) {
        if (err) {
            response.send(err);
        }
        response.render('order-viewer', {data: data});
    });
});


router.put('/', function (req, res) {
    console.log("");
});

router.put('/', function (req, res) {
    console.log("");
});

module.exports = router;
