'use strict';
var Browser = require('zombie');

setup(function(done) {
    this.browser = Browser.create();
    this.browser.visit('http://localhost:3000').then(done, done);
    this.browser.on("error", function(error) {
        console.error(error);
    });
});

test('browser should connect', function() {
    return this.browser.success.should.be.ok;
});

test('should redirect to /basket', function() {
    this.browser.location.pathname.should.eql("/basket");
});

test('we should have two products on the page', function() {
    this.product = this.browser.queryAll('.basket--product');
    this.product.length.should.eql(2);

});

test('clicking on remove item button should remove item', function(done) {
    var self = this;
    this.browser.pressButton('.remove-item', function() {
        self.product = self.browser.queryAll('.basket--product');
        self.product.length.should.eql(1);
        self.count = self.browser.text('.basket-count');
        self.price = self.browser.text('.price-total');
    }).then(done);
});

test('shopping bag should reflect the change in the basket', function() {
    // use cart count from previous 
    // test setup
    this.count.should.eql(1);
});

test('total price should be smaller after removal of item', function() {
    var oldPrice = this.browser.text('.price-total');
    this.price.should.be.lessThan(oldPrice);
});

test('clicking checkout should go to /shipping', function(done) {
    var self = this;
    this.browser.clickLink('Checkout', function() {
        self.browser.location.pathname.should.eql("/shipping");
    }).then(done);
});