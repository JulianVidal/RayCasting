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
            let color = "#888";

            color = distances[i][1] ? "#555" : color;

            switch (World[distances[i][2].y][distances[i][2].x]) {
                case 0:
                    color = !distances[i][1] ? "#55AA55" : "#228822";
                    break;
                case 1:
                    color = !distances[i][1] ? "#888" : "#555";
                    break;
                case 2:
                    color = !distances[i][1] ? "#AA5555" : "#882222";
                    break;
                case 3:
                    color = !distances[i][1] ? "#AAAA55" : "#888822";
                    break;
                default:
                    color = !distances[i][1] ? "#888" : "#555";
                    break;
            }

            // color = `rgb(${200 / distances[i][0]}, ${200 / distances[i][0]}, ${200 / distances[i][0]})`;

            this.screen.rect(i * width, 0, width + 1, (this.screen.height / 2) - (height / 2), "#2233FF");
            this.screen.rect(i * width, ((this.screen.height / 2) - (height / 2) ) + height - 1, width + 1, (this.screen.height / 2) - (height / 2) + 2, "#55AA55");
            this.screen.rect(i * width + width / 2 , this.screen.height / 2, width + 1, height + 1, color, true);
            getImage(i * width, (this.screen.height / 2) - height / 2, distances[i][3], width, height);
            if (distances[i][1]) this.screen.rect(i * width + width / 2 , this.screen.height / 2, width, height + 1, "#00000066", true)
        }

    }
}