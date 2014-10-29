var mongoose = require('mongoose');
var model = require('./model');
var url = "mongodb://localhost/webshop";


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

var getAllCustomers = function (callback) {
    model.CustomerModel.find({}, function (err, data) {
        if (err) {
            return callback(err);
        }
        return callback(null, data);
    })
};
//TODO: den her
var getCustomer = function (id, callback) {
    model.CustomerModel.findOne({_id: id}, function (err, data) {
        if (err) {
            return callback(err);
        }
        return callback(null, data);
    })
};

var getEmployee = function (id, callback) {
    model.EmployeeModel.findOne({_id: id}, function (err, data) {
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
    getAllCustomers: getAllCustomers,
    getCustomer: getCustomer,
    getEmployee: getEmployee,
    getAdvancedDetail: getOrderDetailsProducts
};