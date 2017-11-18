Function.prototype.uncurryThis = function() {
  return (...args) => this.apply(args[0], Array.prototype.slice.call(args, 1))
}

// Removes implicit `this` binding, allowing prototype functions to be used in a more functional manner.

// use case:
//    const toUpperCase = String.prototype.toUpperCase.uncurryThis();
//    const upperCaseStrings = ['some', 'strings'].map(toUpperCase); // => ['SOME', 'STRINGS']
