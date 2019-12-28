class Enemy {
    constructor(x, y, id, score, health) {
        this.x = x;
        this.y = y;

        this.id = id;

        this.dir = [
            'guardStandBack',
            'guardStandBackLeft',
            'guardStandLeft',
            'guardStandFrontLeft',
            'guardStandFront',
            'guardStandFrontRight',
            'guardStandRight',
            'guardStandBackRight',
        ];

        this.heading = 4;

        this.score  = score;
        this.health = health;
        this.deathFrame = 1;
        this.moveSpeed = 0.2;
        this.enemy = true;
    }

    move() {
        const dx = Math.cos(enemyAngles[this.heading]);
        const dy = Math.sin(enemyAngles[this.heading]);

        this.x += this.moveSpeed * dx;
        this.y += this.moveSpeed * dy;
    }

    rotate(direction) {

        if (direction > 0) {
            const elements = this.dir.splice(-direction, direction);
            this.dir = elements.concat(this.dir);
            this.heading += direction;
            while (this.heading > 8) this.heading -= 8;
        } else {
            const elements = this.dir.splice(0, Math.abs(direction));
            this.dir = this.dir.concat(elements);
            this.heading += direction;
            while (this.heading < 8) this.heading += 8;
        }

    }
}