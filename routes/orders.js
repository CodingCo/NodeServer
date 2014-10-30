var express = require('express');
var router = express.Router();

router.get('/:page/:results', function (request, response) {
    var numberOfResults = request.params.page;
    var currentPage = request.params.results;

    request.db.getAdvancedDetail(numberOfResults, currentPage, function (err, data) {
        if (err) {
            response.send(err);
        }
        response.render('order-viewer', {data: data});
    });
});


router.post('/', function(req,res){

});

module.exports = router;
