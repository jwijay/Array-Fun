var arrayfun = require('../arrayfun');

describe("arrayfun", function() {

  it("Must have function named max()", function(){
    expect(arrayfun.max).toBeDefined();
  });

  it("The max() function must return the maximum value", function() {
    var test_array = [1,2,3,4];
    var result2 = arrayfun.max( test_array );
    expect( result2 ).toBe(4);
  });

  it("The max() function must return -Infinity if the array is empty", function() {
    var test_array = [];
    var result2 = arrayfun.max( test_array );
    expect( result2 ).toBe(-Infinity);
  });
});