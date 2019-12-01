class Game {
    constructor(element) {
        this.screen = new Screen(element);
    }

    draw3D() {
        const distances = [];

        for (const ray of player.rays) {
            distances.unshift(ray.distance());
        }

        const width = this.screen.width / distances.length;

        for (let i = 0; i < distances.length; i++) {
            const height = 150 / distances[i][0];
            let image = World[distances[i][2].y][distances[i][2].x] - 1;
            let color = "#2233FF";

            switch (roofWorld[distances[i][2].y][distances[i][2].x]) {
                case 1:
                    color = "#2233FF";
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
            this.screen.rect(i * width, 0, width + 1, (this.screen.height / 2) - (height / 2), color);
            this.screen.rect(i * width, ((this.screen.height / 2) - (height / 2) ) + height - 1, width + 1, (this.screen.height / 2) - (height / 2) + 2, "#55AA55");
            // this.screen.rect(i * width + width / 2 , this.screen.height / 2, width + 1, height + 1, color, true);
            getImage(i * width, (this.screen.height / 2) - height / 2, distances[i][3], width, height, image);
            if (distances[i][1]) this.screen.rect(i * width + width / 2 , this.screen.height / 2, width, height + 1, "#00000066", true)
        }

    }
}