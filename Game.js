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
            let image = "brick";
            let color = "#2233FF";

            switch (World[distances[i][2].y][distances[i][2].x]) {
                case 1:
                    image = "brick";
                    break;
                case 2:
                    image = "wood";
                    break;
                case 3:
                    image = "blueBrick";
                    break;
                case 4:
                    image = "Door";
                    break;
            }

            // switch (roofWorld[distances[i][2].y][distances[i][2].x]) {
            //     case 1:
            //         color = "#333"/*"#2233FF"*/;
            //         break;
            //     case 2:
            //         color = "#AA5555";
            //         break;
            //     case 3:
            //         color = "#AAAA55";
            //         break;
            //     default:
            //         color = "#888";
            //         break;
            // }
            color = "#333";

            // color = `rgb(${200 / distances[i][0]}, ${200 / distances[i][0]}, ${200 / distances[i][0]})`;

            // getImage(i * width , 0, distances[i][3], width, (this.screen.height / 2) - (height / 2), image + 2);
            this.screen.rect(i * width, 0, width, (this.screen.height / 2) - (height / 2), color);
            this.screen.rect(Math.round(i * width), ((this.screen.height / 2) - (height / 2) ) + height, width, (this.screen.height / 2) - (height / 2) + 2, "#666"/*"#55AA55"*/);
            // this.screen.rect(i * width + width / 2 , this.screen.height / 2, width + 1, height + 1, color, true);
            getImage(i * width, (this.screen.height / 2) - height / 2, distances[i][3], width, width + 100, height, image);

            if (distances[i][1]) this.screen.rect(i * width + (width / 2 ), (this.screen.height / 2), width, height, "#00000066"/*`rgba(0, 0, 0, ${distances[i][0] / 7})`*/, true)
        }

        const playerX =  player.pos.x / scale;
        const playerY =  player.pos.y / scale;

        for (let i = 0; i < sprites.length; i++) {


            const spriteX = sprites[i].x - playerX;
            const spriteY = sprites[i].y - playerY;

            let spriteAng = Math.atan2(-spriteY, spriteX);
            while (spriteAng > Math.PI * 2) spriteAng -= Math.PI * 2;
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
            let height   = Math.round((Gameheight/ 2) / distance);

            if (sprites[i].id === "light") {
                height   = Math.round((Gameheight ) / distance);
            } else if (sprites[i].id === "barrel") {
                height   = Math.round((Gameheight/ 2) / distance);
            }else if (sprites[i].id === "stand") {
                height   = Math.round((Gameheight) / distance);
            }else if (sprites[i].id === "dead") {
                height   = Math.round((Gameheight) / distance);
            }

            for (let j = 0; j < height; j++) {
                const columnX = Math.round((spriteScreenX + j) - height / 2);
                if (distances[columnX / resolution]){
                    if (distances[columnX / resolution][0] > distance) {
                        if (sprites[i].id === "light") {
                            getImage(columnX, (this.screen.height / 2) - (height  / 2), j / height, resolution, resolution, height, sprites[i].id);
                        } else if (sprites[i].id === "barrel") {
                            getImage(columnX, (this.screen.height / 2), j / height, resolution, resolution + 10, height, sprites[i].id);
                        }else if (sprites[i].id === "stand") {
                            getImage(columnX, (this.screen.height / 2) - height / 2, j / height, resolution, resolution, height, sprites[i].id);
                        }else if (sprites[i].id === "dead") {
                            getImage(columnX, (this.screen.height / 2) - height / 2, j / height, resolution, resolution, height, sprites[i].id);
                        }
                    }
                }

            }

        }

        getImage((this.screen.width / 2) - 64, this.screen.height - 256, 0, 64, 64 + 100, 256, "gun_" + this.gunFrame);
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