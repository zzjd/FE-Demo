// compose ��󷵻ص� �� ����
// reduceʵ��
function compose(...funcs) {
  if (funcs.length === 0) {
    return (args) => args;
  }
  if (funcs.length === 1) {
    // ��Ԫ������ʱ����reduce����ֱ�ӷ��ظ�Ԫ�أ�����ִ��callback;���������ֶ�ִ��
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args) => {
    // ע�� args �� ...args ������
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
