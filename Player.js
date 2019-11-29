class Player {
    constructor(screen, x, y) {
        this.pos = {
            x: x,
            y: y
        }
        this.screen = screen;
        this.FOV = Math.PI * 2;
        this.ray = new Ray(screen, x, y, (Math.PI * 1) / 3);
        this.rays = [];

        this.rot = 0;

        for (let i = -(this.FOV) / 2 + this.rot; i < (this.FOV) / 2 + this.rot; i += (this.FOV / 60) ) {
            this.rays.push(new Ray(screen, x, y, i));
        }
    }

    draw() {
        this.screen.circle(this.pos.x, this.pos.y, scale / 6, "#DDD");

        this.ray.draw();

        // for (let ray of this.rays) {
            // ray.draw();
        // }

        //this.rays[0].draw();

        // this.screen.line(this.pos.x, this.pos.y, this.pos.x + (this.pos.x * Math.cos(-this.rot)), this.pos.y + (this.pos.y * Math.sin(-this.rot)));

    }

    move(direction) {
        switch (direction) {
            case "right":
                this.pos.x++;
                break;

            case "left":
                this.pos.x--;

                break;
            case "up":
                this.pos.y--;

                break;
            case "down":
                this.pos.y++;

                break;

            default:
                break;
        }


        for (let ray of this.rays) {
            ray.pos = this.pos;
        }

        this.ray.pos = this.pos;
    }

    rotate(direction) {
        switch (direction) {
            case "clock":
                this.rot -= 0.05;
                break;

            case "aclock":
                this.rot += 0.05;

            default:
                break;
        }

        this.rays = [];

        for (let i = -(this.FOV) / 2 + this.rot; i < (this.FOV) / 2 + this.rot; i += (this.FOV / 10)) {
            this.rays.push(new Ray(this.screen, this.pos.x, this.pos.y, i));
        }
        this.ray = new Ray(this.screen, this.pos.x, this.pos.y, Math.PI + this.rot);
    }
}