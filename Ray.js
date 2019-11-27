class Ray {
    constructor(screen, x, y, direction) {
        this.dir = direction;

        while (this.dir > Math.PI * 2) {
            this.dir -= Math.PI * 2;
        }

        while (this.dir < 0) {
            this.dir += Math.PI * 2;
        }

        this.pos = {
            x: x,
            y: y
        };
        this.screen = screen;
    }

    draw() {
        let rise = Math.sin(this.dir);
        let run = Math.cos(this.dir);

        let x, y, slope, count, hit, distance, xhit, rounding;

        hit = false;

        const posOff = {
            x: 1 - (this.pos.x % scale) / scale,
            y: (this.pos.y % scale) / scale
        };

        slope = rise / run;


        if ((this.dir >= 0 && this.dir <= Math.PI / 2) || (this.dir >= (3 * Math.PI) / 2 && this.dir <= 2 * Math.PI)) {
            run = 1;
        } else {
            run = -1;
        }

        if ((this.dir >= 0 && this.dir <= Math.PI)) {
            rise = 1;
        } else {
            rise = -1;
        }


        // If rise / run is positive, this will work for x hits (0, 0)
        // If rise / run is positive, this will work for y hits (0, -1)

        rounding = {
            x: 0,
            y: 0
        };

        count = 0;

        //console.log(rise, run);
        while (!hit) {
            x = posOff.x + count;
            y = x * slope;

            if (y < 0.0001 && y > -0.0001) {
                y = 0;
            }

            if (run > 0) {

                rounding = {
                    x: 0,
                    y: 0
                };
            } else {

                rounding = {
                    x: -1,
                    y: 0
                }
            }

            const worldPos = {
                x: x + (this.pos.x / scale) < 0 ? Math.ceil(x + (this.pos.x / scale)) + rounding.x : Math.floor(x + (this.pos.x / scale)) + rounding.x,
                y: y + (this.pos.y / scale) < 0 ? Math.ceil(y + (this.pos.y / scale)) + rounding.y : Math.floor(y + (this.pos.y / scale)) + rounding.y
            };

            // this.screen.circle(this.pos.x + x * scale, (this.pos.y + y * scale * -1), 4, "#0000FF");
            // console.log(count, "x-hit", worldPos.x, worldPos.y, x + this.pos.x / 60, y, posOff.x);


            if (World[worldPos.y]) {
                if (World[worldPos.y][worldPos.x] === 1) {
                    // this.screen.circle(this.pos.x + x * scale, (this.pos.y + y * scale * -1), 4, "#0000FF");
                    hit = true;
                    // console.log(count, "x-hit-hit", Math.floor(x + (this.pos.x / 60)) + rounding.x, Math.floor(y * -1 + (this.pos.y / 60)) + rounding.y);
                    distance = Math.hypot(x * scale, (y * scale * -1));
                    xhit = x;
                }

            } else {
                break;
            }

            count += Math.sign(run);
        }

        hit = false;
        count = 0;

        while (!hit) {

            if (rise > 0) {
                rounding = {
                    x: 0,
                    y: -1
                };
            } else {
                rounding = {
                    x: 0,
                    y: 0
                };
            }

            y = posOff.y + count;
            x = y / slope;

            if (y < 0.0001 && y > -0.0001) {
                y = 0;
            }
            const worldPos = {
                x: x + (this.pos.x / scale) < 0 ? Math.ceil(x + (this.pos.x / scale)) + rounding.x : Math.floor(x + (this.pos.x / scale)) + rounding.x,
                y: y + (this.pos.y / scale) < 0 ? Math.ceil(y + (this.pos.y / scale)) + rounding.y : Math.floor(y + (this.pos.y / scale)) + rounding.y
            };

            // this.screen.circle(this.pos.x + x * scale, (this.pos.y + y * scale * -1), 4, "#00FF00");
            // console.log(count, "y-hit", Math.floor(x + (this.pos.x / 60)) + rounding.x, Math.floor(y * -1 + (this.pos.y / 60)) + rounding.y);
            if (World[worldPos.y]) {
                if (World[worldPos.y][worldPos.x] === 1) {
                    hit = true;
                    // this.screen.circle(this.pos.x + x * scale, (this.pos.y + y * scale * -1), 4, "#00FF00");

                    //console.log(count, "y-hit-hit", Math.floor(x + (this.pos.x / 60)) + rounding.x, Math.floor(y * -1 + (this.pos.y / 60)) + rounding.y);
                }
            } else {
                break;
            }

            count += Math.sign(rise);
        }

        if (xhit) {
            //console.log(xhit, Math.hypot(x * scale, (y * scale * -1)), distance, Math.hypot(x * scale, (y * scale * -1)) < distance)
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
        } else {
            x *= scale;
            y = x * slope;
            y *= -1;
        }


        this.screen.circle(this.pos.x + x, (this.pos.y + y), 4, "#00FFFF");
        this.screen.line(this.pos.x, this.pos.y, this.pos.x + x, this.pos.y + y);
    }
}