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

    distance() {
        let x, y, slope, count, rise, run, worldPos, hit = false, distance, xHit;

        // Offset position of the player from the nearest corner of the box
        const posOff = {
            x: 1 - (this.pos.x % scale) / scale,
            y: (this.pos.y % scale) / scale
        };

        // Calculates the slope of the ray
        rise = Math.sin(this.dir);
        run = Math.cos(this.dir);

        slope = rise / run;

        worldPos = {
            x: 0,
            y: 0
        };

        distance = {
            x: {
                length: Infinity,
                x_hit: 0,
                worldHit: {x: 0, y: 0}
            },
            y: {
                length: Infinity,
                y_hit: 0,
                worldHit: {x: 0, y: 0}
            },
            length: 0,
            worldHit: {x: 0, y: 0}
        };

        // I turn run and rise into 1 or -1 to know where the line is going (left, right, up or down)
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

        // Count is the intersection point it is on
        count = run < 0 ? run : 0;

        // Detects every hit against a wall
        while (!hit && slope !== Infinity) {
            // Calculates the x and y of the next intersection point
            x = posOff.x + count;
            y = x * slope;

            worldPos = {
                x: Math.floor(this.pos.x / scale) + count + 1 + ( run < 0 ? -1 : 0),
                y: Math.floor(this.pos.y / scale) - (Math.floor((x / ( 1 / slope)) - posOff.y) + 1)
            };

            // this.screen.circle(this.pos.x + (x * scale), (this.pos.y + ((y * scale)) * -1), 4, "#0000FF");

            if (World[worldPos.y]) {
                if (World[worldPos.y][worldPos.x] !== 0) {
                    hit = true;
                    distance.x.length = Math.hypot(x, y);
                    distance.x.x_hit = x;
                    distance.x.worldHit = worldPos;
                }
            } else {
                break;
            }

            // Next intersection point will be following the same direction
            count += run;
        }

        hit = false;
        // Resets hit and count to be used for the hits on the y direction
        count = rise < 0 ? rise : 0;

        while (!hit && slope !== 0) {
            // Calculates the x and y of the next intersection point
            y = posOff.y + count;
            x = slope !== Infinity ? y / slope : 0;

            worldPos = {
                x: Math.floor(this.pos.x / scale) + (Math.floor((y / slope) - posOff.x) + 1),
                y: (Math.floor(this.pos.y / scale) + count * -1) + ( rise < 0 ? 0 : -1)
            };

            // this.screen.circle(this.pos.x + (x * scale), (this.pos.y + ((y * scale)) * -1), 4, "#00FF00");

            if (World[worldPos.y]) {

                if (World[worldPos.y][worldPos.x] !== 0) {
                    hit = true;
                    distance.y.length = Math.hypot(x, y);
                    distance.y.y_hit = y;
                    distance.y.worldHit = worldPos;
                }

            } else {
                break;
            }

            count += rise;
        }

        if (distance.x.length < distance.y.length) {
            x = distance.x.x_hit;
            y = x * slope;
            distance.length = distance.x.length;
            distance.worldHit = distance.x.worldHit;
            xHit = true;
        } else {
            y = distance.y.y_hit;
            x = y / slope;
            distance.length = distance.y.length;
            distance.worldHit = distance.y.worldHit;
            xHit = false;
        }

        this.screen.line(this.pos.x, this.pos.y, this.pos.x + (x * scale), this.pos.y + (y * scale * -1), 2, '#FFFF00');

        return [distance.length * Math.cos(this.dir - player.rot), xHit, distance.worldHit,  !xHit ? (x + (this.pos.x / scale)) - Math.floor(x + (this.pos.x / scale)) : (y - (this.pos.y / scale)) - Math.floor(y - (this.pos.y / scale))];
    }
}