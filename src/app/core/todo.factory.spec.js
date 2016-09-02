describe('todoFactory', function(){

  beforeEach(function(){
    bard.appModule('app');
    bard.inject('todoFactory', 'apiUrl', '$httpBackend');
  });

  // GETALL
  describe('when getAll is called', function(){
    it('should return data on success', function(){
      var response = {
        data: [{}]
      };

      $httpBackend.whenGET(apiUrl + '/todos')
        .respond(response);

      todoFactory.getAll().then(
        function(data) {
          expect(data.length).toEqual(1);
        }
      );
    });

    it('should return error on failure', function(){
      $httpBackend.whenGET(apiUrl + '/todos')
        .respond(500);

      todoFactory.getAll().then(
        function(data){
          expect(1).toBe(2);
        },
        function(error){
          expect(error).toBeDefined;
        }
      );
    });
  });

  // ADD
  describe('when add is called', function(){
    it('should return data on success', function(){
      var response = {
        data: [{}]
      };

      $httpBackend.whenPOST(apiUrl + '/todos')
        .respond(response);

      todoFactory.add({}).then(
        function(data) {
          expect(data.length).toEqual(1);
        }
      );
    });

    it('should return error on failure', function(){
      $httpBackend.whenPOST(apiUrl + '/todos')
        .respond(500);

      todoFactory.getAll().then(
        function(data){
          expect(1).toBe(2);
        },
        function(error){
          expect(error).toBeDefined;
        }
      );
    });
  });

  // REMOVE

  // UPDATE

});
