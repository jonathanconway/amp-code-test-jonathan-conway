describe('AppController', function () {
    var expect = require('chai').expect;

    beforeEach(function (done) {
        browser.get('http://localhost:8000/index.html').then(done);
    });

    it('should filter people by firstName', function() {
        var searchBox = element(by.model('search.firstName'));
        searchBox.clear();
        searchBox.sendKeys('e');

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

    it('should sort people if sort button selected', function() {
        var searchBox = element(by.model('search.firstName'));
        searchBox.clear();

        var sortButton = element(by.css('.sort'));
        sortButton.click();

        var expectedNames = ['Eric', 'Hayley', 'Lucy'];
        var i = 0;
        var value = element
            .all(by.css('.name'))
            .each(function(elem, i) {
                return elem.getText().then(function(text) {
                    if (i < expectedNames.length) {
                        expect(text).to.equal(expectedNames[i]);
                    }
                });
            });
    });
});