var arrayfun = require('../arrayfun');


describe("arrayfun", function() {
    
    it("Must have a function named contains()", function(){
      expect( arrayfun.contains ).toBeDefined();
    });

    it("The contains() function returns true if target is present in array, and false otherwise.", function() {
      var result = arrayfun.contains( [1, 2, 3], 1 );
      expect( result ).toBe( true );

      var result2 = arrayfun.contains( [1, 2, 3], 44 );
      expect( result2 ).toBe( false );
    });
});