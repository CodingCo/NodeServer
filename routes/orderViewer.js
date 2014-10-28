/**
 * Created by ThomasHedegaard on 28/10/14.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(request, response){
    response.render('orderViewer', {title: 'Order Viewer'});
});

module.exports = router;
