var arrayfun = require('../arrayfun');


describe("arrayfun", function() {
    
    it("Must have a function named uniq()", function(){
      expect( arrayfun.uniq ).toBeDefined();
    });

    it("The uniq() function must return an array of the unique values of all arrays provided as input", function() {
      var result = arrayfun.uniq( [1, 2, 3], [5, 2, 1, 4], [2, 1] );
      expect( result ).toEqual( [1,2,3,5,4] );

      var result2 = arrayfun.uniq( [2, 3, 4], [5, 2, '4'] );
      expect( result2 ).toEqual( [2,3,4,5,'4'] );

      var result3 = arrayfun.uniq([1, 2, 1, 3, 1]);
      expect( result3 ).toEqual( [1, 2, 3] );
    });
});