var arrayfun = require('../arrayfun');


describe("arrayfun", function() {
    
    it("Must have a function named intersection()", function(){
      expect( arrayfun.intersection ).toBeDefined();
    });

    it("The intersection() function must return an array of the intersecting elements in all arrays provided as input", function() {
      var result = arrayfun.intersection( [1, 2, 3], [5, 2, 1, 4], [2, 1] );
      expect( result ).toEqual( [1, 2] );

      var result2 = arrayfun.intersection( [2, 3, 4], [5, 2, '4'] );
      expect( result2 ).toEqual( [2] );
    });
});