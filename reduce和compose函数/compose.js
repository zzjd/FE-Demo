// compose 最后返回的 是 函数
// reduce实现
function compose(...funcs) {
  if (funcs.length === 0) {
    return (args) => args;
  }
  if (funcs.length === 1) {
    // 单元素数组时调用reduce，会直接返回该元素，不会执行callback;所以这里手动执行
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args) => {
    // 注意 args 和 ...args 的区别
    console.log("args", args);
    console.log("...args...args...args", ...args);
    console.log("a(b(args));", a(b(...args)));
    a(b(...args));
  });
}
let a = (x, y) => x + y,
  b = (x) => x * x,
  c = (x) => (x === 0 ? x : 1 / x);

console.log(compose(c, b, a)(1, 2));
