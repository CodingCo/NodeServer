/**
 * Created by ThomasHedegaard on 28/10/14.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(request, response){
    response.render('orderViewer', {title: 'Order Viewer', data: [{name:"Yrsa", age: 34}, {name:"Hank", age: 42},{name:"Ole", age: 12}]});
});

module.exports = router;
