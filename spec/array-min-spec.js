var arrayfun = require('../arrayfun');

describe("arrayfun", function() {

  it("Must have function named min()", function(){
    expect(arrayfun.min).toBeDefined();
  });

  it("The min() function must return the minimum value", function() {
      var test_array = [1,2,3,4];
      var result2 = arrayfun.min( test_array );
      expect( result2 ).toBe(1);
    });

  it("The min() function must return -Infinity if the array is empty", function() {
      var test_array = [];
      var result2 = arrayfun.min( test_array );
      expect( result2 ).toBe(Infinity);
    });
});