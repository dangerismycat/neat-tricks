const partialApplication = (fn, ...initialArguments) => {
  return (...remainingArguments) => {
    fn(...initialArguments, ...remainingArguments);
  }
}
