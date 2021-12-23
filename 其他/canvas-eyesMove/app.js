/*app.js*/
import Eye from "./eye";

class Application {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.w = 0;
    this.h = 0;
    this.eyeList = [];
    this.init();
  }

  onMouseMove(e) {
    const { clientX, clientY } = e;
    this.eyeList.forEach((eye) => {
      const { x, y, size } = eye;
      let dx = x - clientX;
      let dy = y - clientY;
      let angle = Math.atan2(dy, dx) + Math.PI;
      eye.cx = Math.cos(angle) * (size / 2 - 5);
      eye.cy = Math.sin(angle) * (size / 2 - 5);
    });
  }

  init() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    window.addEventListener("resize", this.reset.bind(this));
    this.canvas.addEventListener(
      "mousemove",
      this.onMouseMove.bind(this),
      false
    );
    this.reset();
    this.render();
    this.step();
  }

  reset() {
    this.eyeList.length = 0;
    this.w = this.canvas.width = this.ctx.width = window.innerWidth;
    this.h = this.canvas.height = this.ctx.height = window.innerHeight;
    this.render();
  }

  render() {
    const { w, h, ctx, eyeList } = this;
    let size = 48;
    for (let i = 1; i < Math.ceil(w / 160); i++) {
      for (let j = 1; j < Math.ceil(w / 160); j++) {
        let eye = new Eye({
          x: -size + i * 160,
          y: -size + j * 160,
          size,
        }).render(ctx);
        eyeList.push(eye);
      }
    }
  }

  step() {
    requestAnimationFrame(this.step.bind(this));
    const { ctx, w, h, eyeList } = this;
    ctx.clearRect(0, 0, w, h);
    eyeList.forEach((eye) => {
      eye.draw();
    });
  }
}

window.onload = new Application();
