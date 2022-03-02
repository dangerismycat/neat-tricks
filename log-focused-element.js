// from https://hiddedevries.nl/en/blog/2019-01-30-console-logging-the-focused-element-as-it-changes

document.addEventListener('focus', function() {
  console.log('focused: ', document.activeElement)
}, true);
