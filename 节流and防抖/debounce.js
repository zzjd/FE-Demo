// 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
// 生活中的实例： 如果有人进电梯（触发事件），那电梯将在10秒钟后出发（执行事件监听器），这时如果又有人进电梯了（在10秒内再次触发该事件），我们又得等10秒再出发（重新计时）。

function debounce(fn, delay) {
  let timer = null;

  return function () {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}
