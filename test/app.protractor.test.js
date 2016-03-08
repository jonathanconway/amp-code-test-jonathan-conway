describe('AppController', function () {
    var expect = require('chai').expect;
    it('should filter people by firstName', function() {    
        browser.get('http://localhost:3000/index.html').then(function () {
            var searchAny = element(by.model('search.firstName'));
            searchAny.clear();
            searchAny.sendKeys('e');

            var expectedNames = ['Sean', 'Eric', 'Hayley'];
            var i = 0;
            var value = element
                .all(by.css('.name'))
                .each(function(elem, i) {
                    return elem.getText().then(function(text) {
                        expect(text).to.equal(expectedNames[i]);
                    });
                });
        });
    });
});