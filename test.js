let n = readInt(),
  k = readInt(),
  arr = read_line().split(" ");
for (let i = 0; i < n - k + 1; i++) {
  let len = 1;
  let long = 1;
  let res = arr[i];
  for (let j = i; j < k + i; j++) {
    if (arr[j] === arr[j + 1]) {
      len++;
    } else {
      len = 1;
    }
    if (long === len && res > arr[j]) {
      res = arr[j];
    }
    if (long < len) {
      long = len;
      res = arr[j];
    }
  }
  console.log(res);
}
