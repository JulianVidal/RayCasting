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
        let x, y, slope, count, hit, distance, xhit, rounding, rise, run, testPos;

        // Offset position of the player from the nearest corner of the box
        const posOff = {
            x: new Decimal((1 - (this.pos.x % scale) / scale)),
            y: new Decimal((this.pos.y % scale) / scale)
        };

        //console.log(posOff)

        // Calculates the slope of the ray
        rise = Decimal.sin(this.dir);
        run = Decimal.cos(this.dir);
        // Some rounding due to float point

        slope = Decimal.div(rise, run);


        // I turn run and rise into 1 or -1 to know where the line is going (left, right, up or down)
        if ((this.dir >= 0 && this.dir <= Math.PI / 2) || (this.dir >= (3 * Math.PI) / 2 && this.dir <= 2 * Math.PI)) {
            run = new Decimal(1);
        } else {
            run = new Decimal(-1);
        }

        if ((this.dir >= 0 && this.dir <= Math.PI)) {
            rise = new Decimal(1);
        } else {
            rise = new Decimal(-1);
        }

        // Count is the intersection point it is on
        count = new Decimal(0);


        // Detects every hit against a wall
        while (!hit && slope.valueOf() != Infinity) {

            testPos = {
                x: count.add( run < 0 ? 0 : 1).add(Decimal.floor(this.pos.x / 60)),
                y: Decimal.floor(this.pos.y / 60)
            };

            // Calculates the x and y of the next intersection point
            x = Decimal.add(posOff.x, count);
            y = Decimal.mul(x, slope);

            if (rise > 0) { 
                testPos.y = testPos.y.sub( Decimal.floor(y.div(x.div(slope))) );
            } else if (rise < 0) {
                testPos.y = testPos.y.add( Decimal.floor(y.div(x.div(slope))) );
            }

            // console.log(x.valueOf());

            // console.log(worldPos.valueOf(), x.valueOf(), y.valueOf(), posOff.x.add(count).valueOf())

            this.screen.circle(Decimal.add(this.pos.x, x.mul(scale)), Decimal.add(this.pos.y, y.mul(scale).mul(-1)), 4, "#0000FF");
            // console.log(count.valueOf(), "x-hit", worldPos.x.valueOf(), worldPos.y.valueOf(), x.add(Decimal.div(this.pos.x, scale)).valueOf(), y.valueOf(), posOff.x.valueOf());
            // console.log(parseFloat(x.valueOf()) + parseFloat(Decimal.div(this.pos.x, scale).valueOf()));
            // console.log(Decimal.floor(y.mul(-1).add(Decimal.div(this.pos.y, scale))).add(rounding.y).valueOf());

            // Checks if the box is a wall
            if (World[testPos.y]) {
                if (World[testPos.y][testPos.x] === 1) {
                    hit = true;
                    distance = Decimal.hypot(x.times(scale), (y.times(scale).times(-1)));
                    xhit = x;

                    // console.log(count.valueOf(), "x-hit-hit", worldPos.x.valueOf(), worldPos.y.valueOf(), x.add(Decimal.div(this.pos.x, scale)).valueOf(), y.valueOf(), posOff.x.valueOf());
                    // this.screen.circle(this.pos.x + x * scale, (this.pos.y + y * scale * -1), 4, "#0000FF");

                }

            } else {
                break;
            }

            // Next intersection point will be following the same direction
            count = count.plus(Decimal.sign(run));
        }

        // Resets hit and count to be used for the hits on the y direction
        hit = false;
        count = new Decimal(0);

        while (!hit && slope.valueOf() != 0) {

            testPos = {
                x: Decimal.floor(this.pos.x / 60),
                y: count.mul(rise > 0 ? -1 : 0).add(Decimal.floor(this.pos.y / 60))
            };
            //x: count.add( run < 0 ? 0 : 1).add(Decimal.floor(this.pos.x / 60)),

            // Calculates the x and y of the next intersection point
            y = posOff.y.add(count);
            if (slope !== Infinity) {
                x = y.div(slope);
            } else {
                x = new Decimal(0);
            }

            if (run > 0) { 
                testPos.x = testPos.x.add( Decimal.floor(x.div(y.mul(slope))) );
            } else if (run < 0) {
                testPos.x = testPos.x.sub( Decimal.floor(x.div(y.mul(slope))) );
            }

            console.log(testPos.x.valueOf(), testPos.y.valueOf(), (y.mul(slope)).div(x).valueOf() );


            // console.log(worldPos, x, y, posOff.y + count)

            this.screen.circle(Decimal.add(this.pos.x, x.mul(scale)), Decimal.add(this.pos.y, y.mul(scale).mul(-1)), 4, "#00FF00");
            // console.log(count.valueOf(), "y-hit", worldPos.x.valueOf(), worldPos.y.valueOf(), x.add(Decimal.div(this.pos.x, scale)).valueOf(), y.valueOf(), posOff.x.valueOf());
            // console.log(Decimal.floor(y.mul(-1).add(Decimal.div(this.pos.y, scale))).add(rounding.y).valueOf());

            // Checks if the box is a wall
            if (World[testPos.y]) {
                if (World[testPos.y][testPos.x] === 1) {
                    hit = true;

                    // this.screen.circle(this.pos.x + x * scale, (this.pos.y + y * scale * -1), 4, "#00FF00");
                    // console.log(count.valueOf(), "y-hit-hit", worldPos.x.valueOf(), worldPos.y.valueOf(), x.add(Decimal.div(this.pos.x, scale)).valueOf(), y.valueOf(), posOff.x.valueOf());

                }
            } else {
                break;
            }

            count = count.plus(Decimal.sign(rise));
        }

        // Checks there was an x-hit and if the y-hit was closer
        if (xhit) {

            if (distance.gte(Decimal.hypot(x.times(scale), (y.times(scale).times(-1))))) {
                x = x.mul(scale);
                y = x.mul(slope);
                y = y.mul(-1);

            } else {

                x = xhit;
                x = x.mul(scale);
                y = x.mul(slope);
                y = y.mul(-1);

            }
        } else {

            if (Decimal !== Infinity) {
                x = x.mul(scale);
                y = x.mul(slope);
                y = y.mul(-1);
            } else {
                x = x.mul(scale);
                y = y.mul(scale);
                y = y.mul(-1);
            }

        }

        // this.screen.circle(Decimal.add(this.pos.x, x).valueOf(), Decimal.add(this.pos.y, y).valueOf().valueOf(), 4, "#00FFFF");
        this.screen.line(this.pos.x, this.pos.y, Decimal.add(this.pos.x, x).valueOf(), Decimal.add(this.pos.y, y).valueOf().valueOf());
    }
}