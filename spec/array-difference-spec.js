var arrayfun = require('../arrayfun');


describe("arrayfun", function() {
    
    it("Must have a function named difference()", function(){
      expect( arrayfun.difference ).toBeDefined();
    });

    it("The difference() function must return an array excluding all values of the provided arrays using strict equality for comparisons", function() {
      var result = arrayfun.difference( [1, 2, 3], [5, 2, 1, 4], [2, 1] );
      expect( result ).toEqual( [3] );

      var result2 = arrayfun.difference( [2, 3, 4], [5, 2, '4'] );
      expect( result2 ).toEqual( [3,4] );
    });
});