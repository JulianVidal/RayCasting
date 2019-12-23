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

            let wallHit = World[distances[i][2].y][distances[i][2].x];

            if (distances[i][5]) wallHit = 42;

            switch (wallHit) {
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
                    image = "door";
                    break;
                case 41:
                    image = "doorElevator";
                    break;
                case 42:
                    image = "doorSide";
                    break;

                case 5:
                    image = "elevatorSwitch";
                    break;
                case 52:
                    image = "elevatorHandle";
                    break;
            }

            color = "#333";

            this.screen.rect(i * width, 0, width, (this.screen.height / 2) - (height / 2), color);
            this.screen.rect(Math.round(i * width), ((this.screen.height / 2) - (height / 2) ) + height, width, (this.screen.height / 2) - (height / 2) + 2, "#666"/*"#55AA55"*/);

            getImage(Math.round(i * width * 10) / 10, Math.round(((this.screen.height / 2) - height / 2) * 10 ) / 10, distances[i][3], width, width + 100, height, image);

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
    
                return ( spriteXB * spriteXB  +  spriteYB * spriteYB ) - (spriteXA * spriteXA  +  spriteYA * spriteYA )
            }
        );

        distances.sort(
            (a, b) => {
                return b.length - a.length
            }
        )

        for (let i = 0; i < sprites.length; i++) {

            const spriteX = sprites[i].x - playerX;
            const spriteY = sprites[i].y - playerY;

            const distance = Math.sqrt( spriteX * spriteX  +  spriteY * spriteY );

            if (distance > distances[0]) {
                break;
            }

            const height   = Math.round(Gameheight / distance);


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

            // if (spriteScreenX < -3000 || spriteScreenX > 3000) {
            //     break;
            // }

            while (theta < 0) theta += Math.PI * 2;

            for (let j = 0; j < height; j++) {
                const columnX = Math.round((spriteScreenX + j) - height / 2);
                const distIndex = Math.round(columnX / resolution);

                if (distances[distIndex]){
                    if (distances[distIndex][0] > distance) {
                        let imageId = sprites[i].id;

                        if (imageId === 'guard') {
                            if (player.spriteDir === sprites[i].dir) {
                                imageId = 'guardStandBack'
                            } else if (player.spriteDir - 1 === sprites[i].dir) {
                                imageId = 'guardStandRight'
                            } else if (player.spriteDir === sprites[i].dir + 3) {
                                imageId = 'guardStandLeft'
                            }  else {
                                imageId = 'guardStandFront'
                            }
                        }

                        getImage(columnX, (this.screen.height / 2) - height / 2, j / height, resolution, resolution, height, imageId);
                    }
                }

            }

        }


        getImage((this.screen.width / 2) - 150, this.screen.height - 400, 0, 64, 300, 300, "gun_" + this.gunFrame);
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