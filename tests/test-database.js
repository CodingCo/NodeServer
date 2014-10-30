var db = require('../database/access-database');
var should = require('should');

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
   it('should return a employee object')



});
