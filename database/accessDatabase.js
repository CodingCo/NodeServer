var mongoose = require('mongoose');
var schema = mongoose.Schema;
var model = require('./model');


var dbUrl = "mongodb://localhost/northwind";

function connectToDatabase(){
    mongoose.connect(dbUrl);
}

function getAllOrders(){
    var orderSchema = new schema({
        orderID : Number,
        customerID : Number,
        employeeID : Number,
        orderDate : String,
        requiredDate : String,
        shippedDate : String,
        shipVia : String,
        freight : String,
        shipName : String,
        shipAddress : String,
        shipCity : String,
        shipRegion : String,
        shipPostalCode : String,
        shipCountry : String
    });

    var orderModel = mongoose.model('Order', orderSchema);

    var allOrders = orderModel.find(function (err, orders) {
        if (err) return console.error(err);
        return orders;
    });
    return allOrders;
}

function closeDatabaseConnection(){
    mongoose.connection.close();
}


