/*eye.js*/
class Eye {
  constructor(options) {
    this.x = 0; // x轴坐标
    this.y = 0; // y轴坐标
    (this.size = 48), // 眼球半径
      (this.scale = 1); // 缩放大小
    this.cx = 0; // x轴中心偏移量
    this.cy = 0; // y轴中心偏移量
    Object.assign(this, options);
    return this;
  }

  render(ctx) {
    if (!ctx) throw new Error("context is undefined.");
    this.ctx = ctx;
    return this;
  }

  draw() {
    this.drawSphere();
    this.drawCenter();
  }

  drawSphere() {
    // 绘制眼球
    const { ctx, x, y, scale, size } = this;
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);
    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "#FFFFFF";
    ctx.arc(0, 0, size, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  drawCenter() {
    // 绘制眼珠
    const { ctx, x, y, scale, size, cx, cy } = this;
    ctx.save();
    ctx.translate(x + cx, y + cy);
    ctx.scale(scale, scale);
    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.arc(0, 0, size * 0.5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }
}

export default Eye;
