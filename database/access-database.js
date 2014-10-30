var mongoose = require('mongoose');
var model = require('./model');
var url = "mongodb://localhost/webshop";


process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Disconnected through app termination');
        process.exit(0);
    });
});

process.on('SIGTERM', function () {
    mongoose.connection.close(function () {
        console.log('Disconnected through app Something');
        process.exit(0);
    });
});


var connect = function connectToDatabase() {
    mongoose.connect(url);
};

var getOrderDetailsProducts = function (callback) {
    model.DetailsModel.find().populate('order product').exec(function (err, details) {
        if (err) {
            return callback(err);
        }
        return callback(null, details);
    });
};

var getAllOrders = function (callback) {
    model.OrderModel.find({}, function (err, data) {
        if (err) {
            return callback(err);
        }
        return callback(null, data);
    })
};

var getAllCustomers = function (callback) {
    model.CustomerModel.find({}, function (err, data) {
        if (err) {
            return callback(err);
        }
        return callback(null, data);
    })
};

var getCustomer = function (idString, callback) {
    model.CustomerModel.findOne({_id: idString}, function (err, data) {
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
    getAllOrders: getAllOrders,
    getAllCustomers: getAllCustomers,
    getCustomer: getCustomer,
    getAdvancedDetails: getOrderDetailsProducts
    //getOrderDetails:
};