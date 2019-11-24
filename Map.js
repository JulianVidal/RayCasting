class Map {
    constructor(element) {
        this.screen = new Screen(element);
    }

    draw() {
        this.drawWorld();
    }

    drawWorld() {
        World.forEach( (row, y) => {
         row.forEach( (col, x) => {
            if (col === 1) {
                this.screen.square(x * scale, y * scale, scale, "#FF0000");
            }
            this.screen.line(x * scale, y * scale, x * scale, y + scale, 2);
            this.screen.line(x * scale, y * scale, x + scale, y * scale, 2);
         })
        });

    }

}