class Player {
    constructor(screen, x, y) {
        this.pos = {
            x: x,
            y: y
        };
        this.screen = screen;
        this.FOV = (Math.PI / 3);
        this.ray = new Ray(screen, x, y, (Math.PI) / 6);
        this.rayAmount = Gamewidth / resolution;
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
        const newMapPosX = Math.floor((this.pos.x + (Math.cos(this.rot) * MoveSpeed)) / scale);
        const newMapPosY = Math.floor((this.pos.y + (Math.sin(this.rot) * -1 * MoveSpeed)) / scale);

        const mapPosX = Math.floor((this.pos.x) / scale);
        const mapPosY = Math.floor((this.pos.y) / scale);

        const wall = World[newMapPosY][newMapPosX];

        if ( (wall === 0) || (wall === 4  && Math.round(Doors[newMapPosY][newMapPosX]) === 0) ) {
            this.pos.x += Math.cos(this.rot) * MoveSpeed;
            this.pos.y += Math.sin(this.rot) * -1 * MoveSpeed;

        } else if ( World[newMapPosY][mapPosX] === 0 ) {
            this.pos.y += Math.sin(this.rot) * -1 * MoveSpeed;

        } else  if ( World[mapPosY][newMapPosX] === 0 ) {
            this.pos.x += Math.cos(this.rot) * MoveSpeed;
        }
    }

    backward() {
        const newMapPosX = Math.floor((this.pos.x - (Math.cos(this.rot) * MoveSpeed)) / scale);
        const newMapPosY = Math.floor((this.pos.y - (Math.sin(this.rot) * -1 * MoveSpeed)) / scale);

        const mapPosX = Math.floor((this.pos.x) / scale);
        const mapPosY = Math.floor((this.pos.y) / scale);

        const wall = World[newMapPosY][newMapPosX];

        if ( (wall === 0) || (wall === 4 && Math.round(Doors[newMapPosY][newMapPosX]) === 0)) {

            this.pos.x -= Math.cos(this.rot) * MoveSpeed;
            this.pos.y -= Math.sin(this.rot) * -1 * MoveSpeed;

        } else if ( World[newMapPosY][mapPosX] === 0 ) {
            this.pos.y -= Math.sin(this.rot) * -1 * MoveSpeed;

        } else  if ( World[mapPosY][newMapPosX] === 0 ) {
            this.pos.x -= Math.cos(this.rot) * MoveSpeed;
        }
    }

    turn_right() {
        this.rot -= rotateSpeed;
    }

    turn_left() {
        this.rot += rotateSpeed;
    }

    open() {
        for (const ray of player.rays) {
            if (World[ray.distance()[2].y][ray.distance()[2].x] === 4 && ray.distance()[0] < 2) {
                const x = ray.distance()[2].x;
                const y = ray.distance()[2].y;
                const loop = setInterval( () => {
                    this.opening(y, x, loop)
                },
                1000 / fps
                );
                break;
            }
        }
    }

    opening(y, x, loop) {
        Doors[y][x] -= doorSpeed;

        if (Doors[y][x] <= 0) {
            clearInterval(loop);
            setTimeout(() => {
                const newLoop = setInterval(() => {
                    this.closing(x, y, newLoop);
                })
            },
                1000)
        }
    }

    closing(x, y, loop) {
        Doors[y][x] += doorSpeed;

        if (Doors[y][x] >= 1) {
            clearInterval(loop);
        }
    }
}