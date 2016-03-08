angular.module('App', []).controller('AppController', function (people) {
    this.people = people;
    
    return this;
});