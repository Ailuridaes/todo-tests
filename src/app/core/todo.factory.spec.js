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

  // GETBYID
  describe('when getById is called', function(){
    var id = 0;

    it('should return data on success', function(){
      var response = {
        data: [{}]
      };

      $httpBackend.whenGET(apiUrl + '/todos' + id)
        .respond(response);

      todoFactory.getById(id).then(
        function(data) {
          expect(data.length).toEqual(1);
        }
      );
    });

    it('should return error on failure', function(){
      $httpBackend.whenGET(apiUrl + '/todos' + id)
        .respond(500);

      todoFactory.getById(id).then(
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
    var todo = {};

    it('should return data on success', function(){
      var response = {
        data: [{}]
      };

      $httpBackend.whenPOST(apiUrl + '/todos' + todo)
        .respond(response);

      todoFactory.add(todo).then(
        function(data) {
          expect(data.length).toEqual(1);
        }
      );
    });

    it('should return error on failure', function(){
      $httpBackend.whenPOST(apiUrl + '/todos' + todo)
        .respond(500);

      todoFactory.add(todo).then(
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
  describe('when remove is called', function(){
    var todo = {};

    it('should return data on success', function(){
      var response = {
        data: [{}]
      };

      $httpBackend.whenDELETE(apiUrl + '/todos/' + todo)
        .respond(response);

      todoFactory.remove(todo).then(
        function(data) {
          expect(data.length).toEqual(1);
        }
      );
    });

    it('should return error on failure', function(){
      $httpBackend.whenDELETE(apiUrl + '/todos' + todo)
        .respond(500);

      todoFactory.remove(todo).then(
        function(data){
          expect(1).toBe(2);
        },
        function(error){
          expect(error).toBeDefined;
        }
      );
    });
  });

  // UPDATE
  describe('when update is called', function(){
    var todo = {};

    it('should return data on success', function(){
      var response = {
        data: [{}]
      };

      $httpBackend.whenPUT(apiUrl + '/todos/' + todo)
        .respond(response);

      todoFactory.update(todo).then(
        function(data) {
          expect(data.length).toEqual(1);
        }
      );
    });

    it('should return error on failure', function(){
      $httpBackend.whenPUT(apiUrl + '/todos' + todo)
        .respond(500);

      todoFactory.update(todo).then(
        function(data){
          expect(1).toBe(2);
        },
        function(error){
          expect(error).toBeDefined;
        }
      );
    });
  });

});
