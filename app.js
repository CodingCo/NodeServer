var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');


var routes = require('./routes/index');
var orders = require('./routes/orders');
var employee = require('./routes/employee');
var customer = require('./routes/customer');
var secureEntrance = require('./routes/secure-entrance');
var logStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});
var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev', {stream: logStream}));
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// SECURITY \\
if (app.get('env') === 'security') {
    app.use(secureEntrance);
}
// ROUTERS \\
app.use('/', routes);
app.use('/orders', orders);
app.use('/employee', employee);
app.use('/customer', customer);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// error handlers \\
if (app.get('env') === 'development' || 'security') {
    console.log("Mode: " + app.get('env'));
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            statusCode: err.status,
            errorStack: err
        });
    });
}

if (app.get('env') === 'production') {
    console.log("Mode: " + app.get('env'));
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            statusCode: err.status,
            errorStack: "We have highly trained coding ninjas " +
            "to handle this stuff, just wait for them to finish"
        });
    });
}

module.exports = app;
