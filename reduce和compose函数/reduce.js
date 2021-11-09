// // 推荐这篇文章： https://juejin.cn/post/6997617674532438046

// 语法:   arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
// arr.reduce(callback(accumulator, currentValue[index[array]])[initialValue]);

// 下面实现 reduce 函数, prev 是 传入reduce中初始的值
Array.prototype.myReduce = function (callback, prev) {
  // this 代表这个源数组
  for (let i = 0; i < this.length; i++) {
    if (prev === undefined) {
      prev = callback(this[i], this[i + 1], i + 1, this);
      i++;
    } else {
      prev = callback(prev, this[i], i, this);
    }
    console.log("prevprevprev", prev);
  }
  console.log("callbackcallbackcallback", callback);
  return prev;
};

// 给两个使用 reduce 函数的例子
let arr = [10, 20, 30, 40];
result = arr.myReduce((N, item) => {
  // 第一次：10 20
  // 第二次：30 30
  // 第三次: 60 40
  // ...
  // reduce 只传递一个回调函数，那么N第一次默认是第一项，后续的N是上一次函数执行的处理结果
  console.log(N, item);
  return N + item;
}, 100);
console.log(result);

//第二个例子
// result = arr.myreduce((N, item) => {
//   console.log(N, item);
//   return N + item;
// }, 0); //=>REDUCE的第二个参数就是给N赋值的初始值 ITEM从数组第一项开始遍历
// console.log(result);
