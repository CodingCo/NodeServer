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

var getOrderDetailsProducts = function (page, results, callback) {
    model.DetailsModel.find().populate('order product').limit(results).skip(results * page).exec(function (err, details) {
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

var getEmployee = function (id, callback) {
    model.EmployeeModel.findOne({_id: id}, function (err, data) {
        if (err) {
            return callback(err);
        }
        return callback(null, data);
    })
};

var getCustomer = function (id, callback) {
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
    getAllCustomers: getAllCustomers,
    getCustomer: getCustomer,
    getEmployee: getEmployee,
    getAdvancedDetail: getOrderDetailsProducts
};