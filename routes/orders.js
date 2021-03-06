var express = require('express');
var router = express.Router();


router.get('/', function (request, response) {
    request.db.getAll(function (err, data) {
        if (err) {
            response.send(err);
        }
        response.render('order-viewer', {data: data});
    });
});

router.get('/:page/:results', function (request, response) {
    var numberOfResults = request.params.results;
    var currentPage = request.params.page;

    request.db.getAdvancedDetail(currentPage, numberOfResults, function (err, data) {
        if (err) {
            response.send(err);
        }
        response.render('order-viewer', {
            data: data,
            page: request.params.page,
            results: request.params.results
        });
    });
});


router.put('/', function (request, response) {

});

router.delete('/:id', function (request, response) {
    var id = request.params.id;

    request.db.deleteOrderDetails(id,function(err){
        if (err) {
            response.send(err);
        }
        response.render("verify",null);

    });

});

module.exports = router;
