class Ray {
    constructor(screen, x, y, direction) {
        this.dir = direction;
        this.pos = {
            x: x,
            y: y
        };
        this.screen = screen;
    }

    draw() {
        let x, y, slope, count, hit, distance, xhit;

        hit = false;
        count = 0;

        const posOff = {
            x: 1 - (this.pos.x % scale) / scale,
            y: (this.pos.y % scale) / scale
        };

        slope = this.slope();


        while (!hit) {
            x = posOff.x + count;
            y = x * slope;



            if (World[Math.floor(y * -1 + (this.pos.y / 60)) - 1]) {
                if (World[Math.floor(y * -1 + (this.pos.y / 60)) - 1][Math.floor(x + (this.pos.x / 60))] === 1) {
                    this.screen.circle(this.pos.x + x * scale, (this.pos.y + y * scale * -1), 4, "#FFF");
                    hit = true;
                    distance = Math.hypot(x * scale, (y * scale * -1));
                    xhit = x;
                }

            }

            count++;
        }

        hit = false;
        count = 0;

        while (!hit) {
            y = posOff.y + count;

            x = y / slope;


            if (World[Math.floor(y * -1 + (this.pos.y / 60)) - 1]) {
                if (World[Math.floor(y * -1 + (this.pos.y / 60)) - 1][Math.floor(x + (this.pos.x / 60))] === 1) {
                    hit = true;
                    this.screen.circle(this.pos.x + x * scale, (this.pos.y + y * scale * -1), 4, "#FFF");
                    //console.log(count ,"hit",Math.floor(x + (this.pos.x / 60)), Math.floor(y * -1 + (this.pos.y / 60)) - 1);
                }
            }

            count++;
        }

        if (Math.hypot(x * scale, (y * scale * -1)) < distance) {
            x *= scale;
            y = x * slope;
            y *= -1;
        } else {
            x = xhit;
            x *= scale;
            y = x * slope;
            y *= -1;
        }


        this.screen.line(this.pos.x, this.pos.y, this.pos.x + x, this.pos.y + y);
    }

    slope() {
        let x, y;

        x = Math.cos(this.dir);
        y = Math.sin(this.dir);

        return y / x;
    }
}