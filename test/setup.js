// Some setup before jest runs

let origErrorConsole = window.console.error;

window.console.error = (...args) => {
  const firstArg = args.length > 0 && args[0];

  const shouldBeIgnored =
    firstArg &&
    typeof firstArg === 'string' &&
    firstArg.includes('Not implemented: HTMLFormElement.prototype.submit');

  if (!shouldBeIgnored) {
    origErrorConsole(...args);
  }
}