// flattens arrays one level deep, make recursive to flatten n-levels deep

function flatten(arrayOfArrays) {
  return arrayOfArrays.reduce((acc, cur) => [...acc, ...cur]);
}

export default flatten;
