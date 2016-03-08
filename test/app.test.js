describe('AppController', function(){
  beforeEach(module('App'));

  describe('people', function(){
    it('should retrieve people from data store and provide them to view', inject(function($controller){
      var people = [1, 2];
      var myController = $controller('AppController', { people: people });

      expect(myController.people).to.equal(people);
    }));
  });
});