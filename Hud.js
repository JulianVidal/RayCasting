class Hud {
    constructor(screen, player) {
        this.screen = screen;
        this.player = player;
    }

    draw() {

        // Floor
        this.drawNumber(45, 425, 1);

        // Score 
        this.drawNumber(175, 425, player.score);

        // Lives 
        this.drawNumber(225, 426, player.lives);

        // Health
        this.drawNumber(365, 425, player.health);

        // Ammo
        this.drawNumber(450, 425, player.ammo);

    }

    drawNumber(x, y, number) {
        const num = `${number}`.split("").reverse().join("");

        for (let i = 0; i < num.length; i++) {
            getImage(x - (i * 16), y, 0, 8, 16, 32, num[i])
        }
        
    }
}