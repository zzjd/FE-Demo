// compose ��󷵻ص� �� ����
// ���壺compose(a, b, c)(1, 2)  ==>  a(b(c(1, 2)))

function composeByReduce(...funcs) {
  funcs = funcs.reverse();
  return function (...args) {
    let [...[firstFn, ...restFn]] = funcs;
    if (!firstFn) return;
    if (restFn.length === 0) {
      return firstFn.apply(this, args);
    } else {
      let initValue = firstFn.apply(this, args);
      return restFn.reduce(
        (preValue, currentValue) =>
          // console.log("currentValue", currentValue);
          // console.log("accumulator", preValue);
          currentValue(preValue),
        initValue
      );
    }
  };
}

function composeByApply(...fns) {
  // reverse() ������ʹ���뺯����������ִ��
  fns = fns.reverse();
  return function (...args) {
    let res;
    fns.forEach((fn, index) => {
      if (index === 0) {
        res = fn.apply(this, args);
      } else {
        res = fn(res);
      }
    });
    return res;
  };
}
let a = (x, y) => x + y,
  b = (x) => x * x,
  c = (x) => (x === 0 ? x : 1 / x);

console.log(composeByApply(c, b, a)(1, 2));
console.log(composeByReduce(c, b, a)(1, 2));
