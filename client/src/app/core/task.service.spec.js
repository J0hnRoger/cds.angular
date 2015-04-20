describe("Task", function() {

  beforeEach(module('cds'));

  it('should contain an Task service',
    inject(function(Task) {
    expect(Task).not.toBeUndefined();
  }));

   it('should have an object with correct properties', inject(function(Task) {
    var task = new Task();
     expect(task).toBeDefined();
     expect(task.Title).toBeDefined();

   }));
});
