class Player {
    constructor(screen, x, y) {
        this.pos = {
            x: x,
            y: y
        }
        this.screen = screen;
        this.FOV = Math.PI / 3;
        this.ray = new Ray(screen, x, y, (2 * Math.PI + Math.PI / 6));
        this.rays = [];

        for (let i = -(this.FOV) / 2; i < (this.FOV) / 2; i += 0.1) {
            this.rays.push(new Ray(screen, x, y, i)); 
        }
    }

    draw() {
        this.screen.circle(this.pos.x, this.pos.y, scale / 6, "#DDD");
        //this.ray.draw();

        for (let ray of this.rays) {
            ray.draw();
        }

    }
}