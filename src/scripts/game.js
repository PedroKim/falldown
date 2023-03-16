
export default class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    this.animate = this.animate.bind(this);
  }

  start() {
    this.animate();
  }

  animate() {
    requestAnimationFrame(this.animate);

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    

  }
}