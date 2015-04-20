'use strict';

describe('Tasks factory', function(){
  var scope,
    firebaseUrl;

  //mock Application to allow us to inject our own dependencies
  beforeEach(angular.mock.module('cds'));

  beforeEach(function (){
    firebaseUrl = "";
  });

  it('should contain a Task factory', inject(function (TasksFactory){
    expect(TasksFactory).toBeDefined();
  }));

  it('should have an extended firebase array', inject(function (TasksFactory, FireBaseRoot){
    var ref = new Firebase(FireBaseRoot);
    var factory = new TasksFactory(ref);
    expect(factory).toBeDefined();
  }));

  it('should return the tasks array from day url', inject(function (TasksFactory, FireBaseRoot, $httpBackend){
    var ref = new Firebase(FireBaseRoot);

    var factory = new TasksFactory(ref.child("tasks").child("2015").child("4").child("20").child("tasks"));
    factory.$loaded();
    $httpBackend.flush();
    expect(factory).toBe(3);
  }));



});
