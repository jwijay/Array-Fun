module.exports = {
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
};