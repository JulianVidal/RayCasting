class Player {
    constructor(screen, x, y) {
        this.pos = {
            x: x,
            y: y
        }
        this.screen = screen;
        this.ray = new Ray(screen, x, y, Math.PI / 3);
    }

    draw() {
        this.screen.circle(this.pos.x, this.pos.y, scale / 6, "#DDD");
        this.ray.draw();
    }
}