// �Ƽ���ƪ���£� https://juejin.cn/post/6997617674532438046

// array.reduce(callbackfn, [initialValue]);

// function callbackfn(preValue,curValue,index,array){}
//      preValue: ��һ�ε��ûص����ص�ֵ���������ṩ�ĳ�ʼֵ��initialValue��
//      curValue: �����е�ǰ�������������
//      index: ��ǰ�������������е�����ֵ
//      array: ����?reduce()����������

// ����ʵ�� reduce ����, prev �� ����reduce�г�ʼ��ֵ
Array.prototype.myReduce = function (callback, prev) {
  // this �������Դ����
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

// ������ʹ�� reduce ����������
let arr = [10, 20, 30, 40];
result = arr.myReduce((N, item) => {
  // ��һ�Σ�10 20
  // �ڶ��Σ�30 30
  // ������: 60 40
  // ...
  // reduce ֻ����һ���ص���������ôN��һ��Ĭ���ǵ�һ�������N����һ�κ���ִ�еĴ�����
  console.log(N, item);
  return N + item;
}, 100);
console.log(result);

//�ڶ�������
// result = arr.myreduce((N, item) => {
//   console.log(N, item);
//   return N + item;
// }, 0); //=>REDUCE�ĵڶ����������Ǹ�N��ֵ�ĳ�ʼֵ ITEM�������һ�ʼ����
// console.log(result);
