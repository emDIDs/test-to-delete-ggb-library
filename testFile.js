function setup() {
  const testFunc = function (arg = "") {
    console.log(arg);
  };
  const otherFunc = function (arg = "") {
    console.log(`You passed this: ${arg}`);
  };
  return { testFunc, otherFunc };
}
