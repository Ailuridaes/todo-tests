describe('TodoController', function(){

  var todoController;
  var sandbox;

  beforeEach(function(){
    bard.appModule('app');
    bard.inject('$controller', '$q', '$rootScope', '$window', 'todoFactory')
  });

  beforeEach(function(){
    sandbox = sinon.sandbox.create();
    sinon.stub(todoFactory, 'getAll').returns(
      $q.when([{},{},{}]));
    sinon.stub(todoFactory, 'add').returns(
      $q.when({name:"ResponseTodo"}));
    sinon.stub(todoFactory, 'remove').returns(
      $q.when());
    sinon.stub(todoFactory, 'update').returns(
      $q.when());

    todoController = $controller('TodoController');
    $rootScope.$apply();
  });

  afterEach(function () {
    sandbox.restore();
  });


  bard.verifyNoOutstandingHttpRequests();

  it('should be created successfully', function(){
    expect(todoController).toBeDefined();
  });

  describe('after calling getAllTodos', function(){
    it('should have 3 objects in the array', function(){
      expect(todoController.todos.length).toEqual(3);
    });
  });

  describe('after calling addTodo', function(){
    it('should have the new response object in the array', function(){
      todoController.blankTodo.name = 'BlankTodo';
      todoController.addTodo();

      $rootScope.$apply();

      expect(todoController.todos.length).toEqual(4);
      expect(todoController.todos[todoController.todos.length-1].name).toEqual('ResponseTodo');
    });
  });

  describe('after calling removeTodo', function(){
    it('should have 2 objects in the array if dialog confirmed', function(){
      sandbox.stub(window, 'confirm').returns(true);
      todoController.removeTodo();

      $rootScope.$apply();
      expect(todoController.todos.length).toEqual(2);
    });

    it('should have 3 objects in the array if dialog cancelled', function(){
      sandbox.stub(window, 'confirm').returns(false);
      todoController.removeTodo();

      $rootScope.$apply();
      expect(todoController.todos.length).toEqual(3);
    });
  });

  describe('after calling updateTodo', function() {
    it('should exit edit mode', function(){
      todoController.todos[1].edit = true;
      todoController.updateTodo(todoController.todos[1]);

      $rootScope.$apply();
      expect(todoController.todos[1].edit).toEqual(false);
    })
  })





})
