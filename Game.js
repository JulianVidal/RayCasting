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

        const width = 1;

        for (let i = 0; i < distances.length; i++) {
            const height = Gameheight / distances[i][0];
            let image;
            let color = "#2233FF";

            switch (World[distances[i][2].y][distances[i][2].x]) {
                case 1:
                    image = "brick";
                    break;
                case 2:
                    image = "redbrick";
                    break;
                case 3:
                    image = "wood";
                    break;
            }

            switch (roofWorld[distances[i][2].y][distances[i][2].x]) {
                case 1:
                    color = "#333"/*"#2233FF"*/;
                    break;
                case 2:
                    color = "#AA5555";
                    break;
                case 3:
                    color = "#AAAA55";
                    break;
                default:
                    color = "#888";
                    break;
            }

            // color = `rgb(${200 / distances[i][0]}, ${200 / distances[i][0]}, ${200 / distances[i][0]})`;

            // getImage(i * width , 0, distances[i][3], width, (this.screen.height / 2) - (height / 2), image + 2);
            this.screen.rect(i * width, 0, width, (this.screen.height / 2) - (height / 2), color);
            this.screen.rect(i * width, ((this.screen.height / 2) - (height / 2) ) + height, width, (this.screen.height / 2) - (height / 2) + 2, "#666"/*"#55AA55"*/);
            // this.screen.rect(i * width + width / 2 , this.screen.height / 2, width + 1, height + 1, color, true);
            getImage(i * width, (this.screen.height / 2) - height / 2, distances[i][3], width, width + 100, height, image);
            if (distances[i][1]) this.screen.rect(i * width + (width / 2 ), (this.screen.height / 2), width, height, "#00000066"/*`rgba(0, 0, 0, ${distances[i][0] / 7})`*/, true)
        }


        const playerX =  player.pos.x / scale;
        const playerY =  player.pos.y / scale;

        if (playerY < barrel.y) {


            const spriteX = barrel.x - playerX;
            const spriteY = barrel.y - playerY;

            let spriteAng = Math.atan2(-spriteY, spriteX);
            while (spriteAng > Math.PI * 2) spriteAng -= Math.PI * 2;
            while (spriteAng < 0) spriteAng += Math.PI * 2;


            let theta = spriteAng - player.rot;
            while (theta > Math.PI * 2) theta -= Math.PI * 2;

            const spriteScreenX  = (  ( 1 - (theta / (Math.PI / 6)) ) * (Gamewidth / 2)   );

            while (theta < 0) theta += Math.PI * 2;


            const distance = Math.sqrt( spriteX * spriteX  +  spriteY * spriteY );
            const height   = (Gameheight / 2) / distance;


            getImage(spriteScreenX, (((5 * (this.screen.height) )/ 8) - (height / 2)), 0, 64, height, height, "barrel")
            

            console.log(theta * (180 / Math.PI), player.rot* (180 / Math.PI), spriteAng * (180 / Math.PI), distance)
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