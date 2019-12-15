class Game {

    constructor(element) {
        this.screen = new Screen(element);
        this.gunFrame = 5;
    }

    draw3D() {
        const distances = [];

        for (const ray of player.rays) {
            distances.unshift(ray.distance());
        }

        const width = 1;

        for (let i = 0; i < distances.length; i++) {
            const height = Gameheight / distances[i][0];
            let image = World[distances[i][2].y][distances[i][2].x] - 1;
            let color = "#2233FF";

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
            getImage(i * width, (this.screen.height / 2) - height / 2, distances[i][3], width, height, image);
            if (distances[i][1]) this.screen.rect(i * width + (width / 2 ), (this.screen.height / 2), width, height, "#00000066"/*`rgba(0, 0, 0, ${distances[i][0] / 7})`*/, true)
        }

        getImage((this.screen.width / 2) - 64, this.screen.height - 512, 0, 64, 512, this.gunFrame);
        // getImage(260, this.screen.height - 330, 0, 128, 100, 3);

    }

    gunAnimation(loop) {
        if (this.gunFrame >= 9) {
            this.gunFrame = 5;
            clearInterval(loop);
        } else {
            this.gunFrame++;
        }
    }
} 