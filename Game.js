class Game {
    constructor(element) {
        this.screen = new Screen(element);
    }

    draw3D() {
        const distances = [];

        for (const ray of player.rays) {
            distances.push(ray.distance());
        }

        const width = this.screen.width / distances.length;

        for (let i = 0; i < distances.length; i++) {
            const height = 200 / distances[i][0];
            let color = "#888";

            color = distances[i][1] ? "#555" : color;

            // color = `rgb(${200 / distances[i][0]}, ${200 / distances[i][0]}, ${200 / distances[i][0]})`;

            this.screen.rect(i * width, 0, width + 1, (this.screen.height / 2) - (height / 2), "#2233FF");
            this.screen.rect(i * width, ((this.screen.height / 2) - (height / 2) ) + height - 1, width + 1, (this.screen.height / 2) - (height / 2) + 2, "#55AA55");
            this.screen.rect(i * width + width / 2 , this.screen.height / 2, width + 1, height + 1, color, true);
        }

    }
}