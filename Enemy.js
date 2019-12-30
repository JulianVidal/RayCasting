class Enemy {
    constructor(x, y, id, score, health, direction) {
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

        this.rotate(direction);

        this.heading = 0;

        this.score = score;
        this.health = health;
        this.deathFrame = 1;
        this.moveSpeed = 0.1;
        this.alive = true;
        this.patrolling = true;
        this.searching = false;
        this.shooting = false;
    }

    move() {
        const theta = this.heading;

        const newMapPosX = Math.floor(((this.x * scale) + (Math.cos(theta) * MoveSpeed) * 2) / scale);
        const newMapPosY = Math.floor(((this.y * scale) + (Math.sin(theta) * -1 * MoveSpeed) * 2) / scale);

        const mapPosX = Math.floor(this.x);
        const mapPosY = Math.floor(this.y);

        const wall = parseInt(`${World[newMapPosY][newMapPosX]}` [0]);

        let spriteHitY;
        let spriteHitX;


        for (const sprite of sprites) {

            if (Math.floor(sprite.x) === newMapPosX && Math.floor(sprite.y) === newMapPosY && !passable(sprite, true)) {
                spriteHitY = true;
                spriteHitX = true;
            }

            if (Math.floor(sprite.x) === mapPosX && Math.floor(sprite.y) === newMapPosY && !passable(sprite, true)) {
                spriteHitY = true;
                spriteHitX = false;
                break;

            }

            if (Math.floor(sprite.x) === newMapPosX && Math.floor(sprite.y) === mapPosY && !passable(sprite, true)) {
                spriteHitX = true;
                spriteHitY = false;
                break;
            }


            if (spriteHitX && spriteHitY) break;
        }

        if (((wall === 0) || (wall === 4 && Math.round(Doors[newMapPosY][newMapPosX]) === 0)) && (!spriteHitX && !spriteHitY)) {
            this.x += Math.cos(theta) * this.moveSpeed;
            this.y += Math.sin(theta) * -1 * this.moveSpeed;


        } else if (World[newMapPosY][mapPosX] === 0 && !spriteHitY && Math.abs(Math.sin(theta)) > 0.00001) {
            this.y += Math.sin(theta) * -1 * this.moveSpeed;

        } else if (World[mapPosY][newMapPosX] === 0 && !spriteHitX) {
            this.x += Math.cos(theta) * this.moveSpeed;
        } else {
            return false;
        }

        return true;
    }

    rotate(direction) {

        // if (direction > 0) {
        //     const elements = this.dir.splice(-direction, direction);
        //     this.dir = elements.concat(this.dir);
        //     this.heading += direction;
        //     while (this.heading > 8) this.heading -= 8;
        // } else {
        //     const elements = this.dir.splice(0, Math.abs(direction));
        //     this.dir = this.dir.concat(elements);
        //     this.heading += direction;
        //     while (this.heading < 0) this.heading += 8;
        // }


        this.heading += direction;
        while (this.heading > Math.PI) this.heading -= Math.PI * 2;
        while (this.heading < Math.PI) this.heading += Math.PI * 2;

        const dir = this.heading;

        if (dir > 7 * Math.PI / 8 || (dir < -7 * Math.PI / 8 && dir > -Math.PI)) {
            playerDirection = this.dir[0]
        } else if (dir > -7 * Math.PI / 8 && dir < -5 * Math.PI / 8) {
            playerDirection = this.dir[1]
        } else if (dir > -5 * Math.PI / 8 && dir < -3 * Math.PI / 8) {
            playerDirection = this.dir[2]
        } else if (dir > -3 * Math.PI / 8 && dir < -1 * Math.PI / 8) {
            playerDirection = this.dir[3]
        } else if ((dir > -1 * Math.PI / 8 && dir < 0) || (dir < 1 * Math.PI / 8 && dir > 0)) {
            playerDirection = this.dir[4]
        } else if (dir > 1 * Math.PI / 8 && dir < 3 * Math.PI / 8) {
            playerDirection = this.dir[5]
        } else if (dir > 3 * Math.PI / 8 && dir < 5 * Math.PI / 8) {
            playerDirection = this.dir[6]
        } else if (dir > 5 * Math.PI / 8 && dir < 7 * Math.PI / 8) {
            playerDirection = this.dir[7]
        }

    }

    patroll() {
        if (!this.move()) this.rotate(4);

        if (this.inSight()) {
            this.patrolling = false;
            this.searching = true;
        }
    }

    inSight() {

        const playerX = player.pos.x / scale;
        const playerY = player.pos.y / scale;

        const dX = playerX - this.x;
        const dY = playerY - this.y;

        const dir = Math.atan2(dY, dX);

        let playerDirection;

        if (dir > 7 * Math.PI / 8 || (dir < -7 * Math.PI / 8 && dir > -Math.PI)) {
            playerDirection = this.dir[0]
        } else if (dir > -7 * Math.PI / 8 && dir < -5 * Math.PI / 8) {
            playerDirection = this.dir[1]
        } else if (dir > -5 * Math.PI / 8 && dir < -3 * Math.PI / 8) {
            playerDirection = this.dir[2]
        } else if (dir > -3 * Math.PI / 8 && dir < -1 * Math.PI / 8) {
            playerDirection = this.dir[3]
        } else if ((dir > -1 * Math.PI / 8 && dir < 0) || (dir < 1 * Math.PI / 8 && dir > 0)) {
            playerDirection = this.dir[4]
        } else if (dir > 1 * Math.PI / 8 && dir < 3 * Math.PI / 8) {
            playerDirection = this.dir[5]
        } else if (dir > 3 * Math.PI / 8 && dir < 5 * Math.PI / 8) {
            playerDirection = this.dir[6]
        } else if (dir > 5 * Math.PI / 8 && dir < 7 * Math.PI / 8) {
            playerDirection = this.dir[7]
        }

        if (playerDirection === "guardStandFront" || playerDirection === "guardStandFrontLeft" || playerDirection === "guardStandFrontRight") return true;

        return false;
    }

    search() {
        const playerX = player.pos.x / scale;
        const playerY = player.pos.y / scale;

        const dX = playerX - this.x;
        const dY = playerY - this.y;

        const dir = Math.atan2(dY, dX);

        const rotation = Math.round(dir / (Math.PI / 8)) - this.heading;
        console.log(dir * (180 / Math.PI), rotation, this.heading)
        this.rotate(rotation);
    }
}