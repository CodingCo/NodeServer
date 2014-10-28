var mongoose = require('mongoose');
var model = require('./model');
var dbUrl = "mongodb://localhost/northwind";


var connect = function connectToDatabase() {
    mongoose.connect(dbUrl);
};

var getAllOrders = function (callback) {
    model.OrderModel.find({}, function (err, data) {
        if (err) {
            return callback(err);
        }
        return callback(null, data);
    })
};


var close = function () {
    mongoose.connection.close();
};


module.exports = {
    connect: connect,
    close: close,
    getAllOrders: getAllOrders
    //getOrderDetails:
};