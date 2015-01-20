

var arrayFun = {
  first: function( array, n ) {
    //if n is specified, return first n elements
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0,n);
    }
  },

  max: function( array ) {
    //retrieve the maximum value of a collection
    if (array.length > 0) {
      return array.reduce(function(a, b) {
        return a > b? a : b;
      });  
    } else {
      return -Infinity;
    }
  },

  min: function ( array ) {
    if (array.length > 0) {
      return array.reduce(function(a, b) {
        return a < b? a : b;
      });  
    } else {
      return Infinity;
    }
  },

  //http://stackoverflow.com/questions/2141520/javascript-variable-number-of-arguments-to-function
  //http://www.sitepoint.com/arguments-a-javascript-oddity/
  intersection: function() {
    //need to convert the object of a variable num of arrays (arguments) into an array
    var args = Array.prototype.slice.call(arguments);

    var intersecting = args.reduce(function(arrayA,arrayB) {
      var result = [];
      for (var i = 0; i < arrayA.length; i++) {
        //check if each element is present in arrayB
        if (arrayB.indexOf(arrayA[i]) > -1) {
          result.push(arrayA[i]);
        }
      }
      return result;
    });
    return intersecting;
  },

  //difference takes in a variable number of arrays, and returns an array of the unique values of the first array, when compared to all following array arguments)
  difference: function() {
    var args = Array.prototype.slice.call(arguments);

    var uniqueValuesOfFirst = args.reduce(function(arrayA,arrayB){
      var result = [];
      for (var i = 0; i < arrayA.length; i++) {
        //check if each element is NOT present in arrayB
        if (arrayB.indexOf(arrayA[i]) === -1) {
          result.push(arrayA[i]);
        }
      }
      return result;
    });
    return uniqueValuesOfFirst;
  },

  uniq: function() {
    var unique = [];

    var args = Array.prototype.slice.call(arguments);

    var smushed = args.reduce(function(a,b) {
      return a.concat(b);
    });

    unique = smushed.filter(function (value, index, self) { 
      return self.indexOf(value) === index;
    });

    //at this point, sorting may be necessary (test cases do not sort unique's results)
    return unique;
  }

};
module.exports = arrayFun;
