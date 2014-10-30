var db = require('../database/access-database');
var should = require('should');

describe('test database connection', function () {
    it('should verify the database connection', function () {
        db.connection.readyState.should.be.within(1, 2);
    })
});

describe('get customer', function () {
    it('should return a person object', function (done) {
        var customerID = "ANATR";
        db.getCustomer(customerID, function (err, customer) {
            if (err) {
                throw err;
            }
            customer.should.instanceOf(Object);
            customerID.should.equal('ANATR');
            customer.postalCode.should.equal("5021");
            customer.country.should.equal("Mexico");
            done();
        })
    })
});

describe('get employee', function () {
    it('should return a employee object', function (done) {
        var employeeID = 1;
        db.getEmployee(employeeID, function (err, employee) {
            if (err) {
                throw err
            }
            employee.should.instanceOf(Object);
            employee.firstName.should.equal("Nancy");
            employee.lastName.should.equal("Davolio");
            done();
        })
    })
});

describe('get order', function () {
    it('should return an mixed order object', function (done) {
        db.getAll(function (err, data) {
            (data[0] != undefined).should.equal(true);
            (data[0].product != undefined).should.equal(true);
            (data[0].product._id != undefined).should.equal(true);
            (data[0].unitPrice != undefined).should.equal(true);
            done();
        })
    })
});