class Game {

    constructor(element) {
        this.screen = new Screen(element);
        this.gunFrame = 1;
    }

    draw3D() {
        const distances = [];

        for (const ray of player.rays) {
            distances.unshift(ray.distance());
        }

        const width = resolution;

        for (let i = 0; i < distances.length; i++) {
            const height = Gameheight / distances[i][0];
            let image = "greyStone";
            let color = "#2233FF";

            switch (World[distances[i][2].y][distances[i][2].x]) {
                case 1:
                    image = "greyStone";
                    break;
                case 11:
                    image = "greyStonePortrait";
                    break;
                case 12:
                    image = "greyStoneEagle";
                    break;
                case 13:
                    image = "greyStoneBanner";
                    break;


                case 2:
                    image = "wood";
                    break;
                case 21:
                    image = "woodEagle";
                    break;
                case 22:
                    image = "woodPortrait";
                    break;

                case 3:
                    image = "blueBrick";
                    break;
                case 31:
                    image = "blueBrickCell";
                    break;
                case 32:
                    image = "blueBrickCellBone";
                    break;


                case 4:
                    image = "Door";
                    break;
            }

            color = "#333";

            this.screen.rect(i * width, 0, width, (this.screen.height / 2) - (height / 2), color);
            this.screen.rect(Math.round(i * width), ((this.screen.height / 2) - (height / 2) ) + height, width, (this.screen.height / 2) - (height / 2) + 2, "#666"/*"#55AA55"*/);

            getImage(i * width, (this.screen.height / 2) - height / 2, distances[i][3], width, width + 100, height, image);

            if (distances[i][1]) this.screen.rect(i * width + (width / 2 ), (this.screen.height / 2), width, height, "#00000066"/*`rgba(0, 0, 0, ${distances[i][0] / 7})`*/, true)
        }

        const playerX =  player.pos.x / scale;
        const playerY =  player.pos.y / scale;

        sprites.sort(
            (a, b) => {
                const spriteXA = a.x - playerX;
                const spriteYA = a.y - playerY;

                const spriteXB = b.x - playerX;
                const spriteYB = b.y - playerY;

                return (Math.sqrt( spriteXB * spriteXB  +  spriteYB * spriteYB )) - (Math.sqrt( spriteXA * spriteXA  +  spriteYA * spriteYA ))
            }
        );

        for (let i = 0; i < sprites.length; i++) {


            const spriteX = sprites[i].x - playerX;
            const spriteY = sprites[i].y - playerY;

            let spriteAng = Math.atan2(-spriteY, spriteX);
            // while (spriteAng > Math.PI * 2) spriteAng -= Math.PI * 2;
            while (spriteAng < 0) spriteAng += Math.PI * 2;


            let theta;


            if ((player.rot + (Math.PI / 6)) > Math.PI * 2 && spriteAng > 0 && spriteAng < Math.PI / 3) {
                theta = spriteAng - (player.rot - (Math.PI * 2));
            } else if ((spriteAng + (Math.PI / 6)) > Math.PI * 2 && player.rot > 0 && player.rot < Math.PI / 3){
                theta = (spriteAng - (Math.PI * 2)) - player.rot;
            } else {
                theta = spriteAng - player.rot;
            }

            while (theta > Math.PI * 2) theta -= Math.PI * 2;

            const spriteScreenX  = Math.round(( 1 - (theta / (Math.PI / 6)) ) * (Gamewidth / 2));

            while (theta < 0) theta += Math.PI * 2;


            const distance = Math.sqrt( spriteX * spriteX  +  spriteY * spriteY );
            const height   = Math.round(Gameheight / distance);

            for (let j = 0; j < height; j++) {
                const columnX = Math.round((spriteScreenX + j) - height / 2);
                if (distances[columnX / resolution]){
                    if (distances[columnX / resolution][0] > distance) {
                        getImage(columnX, (this.screen.height / 2) - height / 2, j / height, resolution, resolution, height, sprites[i].id);
                    }
                }

            }

        }

        getImage((this.screen.width / 2) - (64 * 2), this.screen.height - 256, 0, 64, 64 * 4, 256, "gun_" + this.gunFrame);
        // getImage(260, this.screen.height - 330, 0, 128, 100, 3);

    }

    gunAnimation(loop) {
        if (this.gunFrame >= 5) {
            this.gunFrame = 1;
            clearInterval(loop);
        } else {
            this.gunFrame++;
        }
    }
} 