module.exports = {
  first: function( array, n ) {
    //if n is specified, return first n elements
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0,n);
    }
  }
};