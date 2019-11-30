class Map {
    constructor(element) {
        this.screen = new Screen(element);
    }

    draw() {
        this.drawWorld();
    }

    drawWorld() {

        for (let y = 0; y < World.length; y++) {
            for (let x = 0; x < World[y].length; x++) {
                if (World[y][x] === 1) {
                    this.screen.square(x * scale, y * scale, scale, "#FF0000");
                } else {
                    this.screen.square(x * scale, y * scale, scale, "#555");
                }
                this.screen.line((x + 1) * scale, (y + 1) * scale, (x + 1) * scale, (y + 1), 2, "#000");
                this.screen.line((x + 1) * scale, (y + 1) * scale, (x + 1), (y + 1) * scale, 2, "#000");
            }
        }

    }

}