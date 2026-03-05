const range = (...args) => (function* () {
  let start, step = 1, stop;

  if (args.length === 1) {
    start = 1;
    stop = args[0];
  } 
  else if (args.length === 2) {
    [start, stop] = args;
  } 
  else {
    [start, step, stop] = args;
  }

  for (let i = start; i <= stop; i += step) {
    yield i;
  }
})();