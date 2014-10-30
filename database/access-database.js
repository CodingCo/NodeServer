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

var close = function () {
    mongoose.connection.close();
};


var connect = function connectToDatabase() {
    mongoose.connect(url);

    mongoose.connection.on('connected', function () {
        console.log("Connected to db");
    });

    mongoose.connection.on('error', function (err) {
        console.log('Mongoose connection error: ' + err);
    });

    mongoose.connection.on('disconnected', function () {
        console.log('Mongoose disconnected');
    });
};
connect();


var getOrderDetailsProducts = function (page, results, callback) {
    model.DetailsModel.find().populate('order product').limit(results).skip(results * page).exec(function (err, details) {
        if (err) {
            return callback(err);
        }
        return callback(null, details);
    });
};



var getAllCustomers = function (page, results,callback) {
    model.CustomerModel.find().limit(results).skip(results * page).exec(function (err, data) {
        if (err) {
            return callback(err);
        }
        return callback(null, data);
    });
};

var getAll = function (callback) {
    model.DetailsModel.find().populate('order product').exec(function (err, details) {
        if (err) {
            return callback(err);
        }
        return callback(null, details);
    });
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
    model.CustomerModel.findOne({_id: id}, function (err, data) {
        if (err) {
            return callback(err);
        }
        return callback(null, data);
    })
};

var deleteOrderDetails = function (id, callback) {
    model.DetailsModel.findOne({_id: id}).remove(callback);
};

var updateOrderDetails = function (id, orderId, productId, unitPrice, quantity, discount, callback) {
    model.DetailsModel.update({_id: id}, { $set: { orderId: orderId }},
        {$set: {productId: productId}},
        {$set: {unitPrice: unitPrice}},
        {$set: {quantity: quantity}},
        {$set: {discount: discount}},
        callback);
};


module.exports = {
    connect: connect,
    close: close,
    getAllCustomers: getAllCustomers,
    getCustomer: getCustomer,
    getEmployee: getEmployee,
    getAdvancedDetail: getOrderDetailsProducts,
    getAll: getAll,
    deleteOrderDetails: deleteOrderDetails,
    updateOrderDetails: updateOrderDetails
};