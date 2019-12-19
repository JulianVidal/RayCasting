class Player {
    constructor(screen, x, y) {
        this.pos = {
            x: x,
            y: y
        };
        this.screen = screen;
        this.FOV = (Math.PI / 3);
        this.ray = new Ray(screen, x, y, (Math.PI) / 6);
        this.rayAmount = Gamewidth;
        this.rays = [];

        this.rot = 0;

        for (let i = -(this.FOV) / 2 + this.rot; i < (this.FOV) / 2 + this.rot; i += (this.FOV / this.rayAmount)) {
            this.rays.push(new Ray(screen, x, y, i));
        }
    }

    draw() {
        this.screen.circle(this.pos.x, this.pos.y, scale / 6, "#DDD");

        // this.ray.draw();

        for (let ray of this.rays) {
            ray.distance(this.rot);
        }
    }

    move() {

        switch (moving) {
            case "forward":
                this.forward();
                break;
            case "backward":
                this.backward();
                break;
        }

        switch (rotating) {
            case "turn-right":
                this.turn_right();
                break;
            case "turn-left":
                this.turn_left();
                break;
        }

        while (this.rot > Math.PI * 2) {
            this.rot -= Math.PI * 2;
        }

        while (this.rot < 0) {
            this.rot += Math.PI * 2;
        }

        this.rays = [];

        for (let i = -(this.FOV) / 2 + this.rot; i < (this.FOV) / 2 + this.rot; i += (this.FOV / this.rayAmount)) {
            this.rays.push(new Ray(this.screen, this.pos.x, this.pos.y, i));
        }

        for (let ray of this.rays) {
            ray.pos = this.pos;
        }

        this.ray.pos = this.pos;
    }

    forward() {
        if ( World[Math.floor((this.pos.y + (Math.sin(this.rot) * -1 * MoveSpeed)) / scale)][Math.floor((this.pos.x + (Math.cos(this.rot) * MoveSpeed)) / scale)] === 0 ) {
            this.pos.x += Math.cos(this.rot) * MoveSpeed;
            this.pos.y += Math.sin(this.rot) * -1 * MoveSpeed;
        }
    }

    backward() {
        if ( World[Math.floor((this.pos.y - (Math.sin(this.rot) * -1 * MoveSpeed)) / scale)][Math.floor((this.pos.x - (Math.cos(this.rot) * MoveSpeed)) / scale)] === 0 ) {
            this.pos.x -= Math.cos(this.rot) * MoveSpeed;
            this.pos.y -= Math.sin(this.rot) * -1 * MoveSpeed;
        }
    }

    turn_right() {
        this.rot -= rotateSpeed;
    }

    turn_left() {
        this.rot += rotateSpeed;
    }
}