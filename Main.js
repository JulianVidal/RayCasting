const fps = 30;
const scale = 30;
const MoveSpeed = 2;
const rotateSpeed = 0.1;
let moving = "";

let rotating = "";

let image;


document.addEventListener('keydown', keyPressed);
document.addEventListener('keyup', keyUp);

const World = [
    [2, 2, 2, 2, 1, 1, 1, 1, 1, 1],
    [2, 0, 0, 2, 0, 0, 0, 0, 0, 1],
    [2, 0, 0, 2, 0, 0, 0, 0, 0, 1],
    [2, 0, 0, 2, 0, 0, 0, 0, 0, 1],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [2, 2, 2, 0, 0, 0, 0, 3, 3, 3],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 3],
    [1, 0, 0, 0, 0, 0, 3, 0, 0, 3],
    [1, 0, 0, 1, 0, 0, 3, 0, 0, 3],
    [1, 1, 1, 1, 1, 1, 3, 3, 3, 3]
];

let map;
let game;
let player;

// Begins the program
window.onload = setup();

// Runs before at the beginning of the program
function setup() {

    // Initialises both canvases
    map = new Map(document.getElementById("Map"));
    game = new Game(document.getElementById("Game"));

    // Changes the size of the canvas
    map.screen.setSize(World[0].length * scale, World.length * scale);
    game.screen.setSize(600, 200);

    // Changes the background of the canvas
    map.screen.background("#555");
    game.screen.background("#000");

    // Initialises player
    player = new Player(map.screen, (World[0].length * scale) / 2, scale * (3/2));

    // Begins the game
    setInterval(draw, 1000 / fps);
    // draw();

    // window.onload needs a return
    return null;
}

function draw() {
    // Changes the background of the canvas
    map.screen.background("#555");
    game.screen.background("#000");
    map.draw();
    game.draw3D();

    player.move();
    player.draw();
}

function keyPressed(event) {

    switch (event.key) {
        case "w":
            console.log("forward");
            moving = "forward";
            break;

        case "s":
            console.log("backward");
            moving = "backward";
            break;

        case "d":
            console.log("turn-right");
            rotating = "turn-right";
            break;

        case "a":
            console.log("turn-left");
            rotating = "turn-left";
            break;

        default:
            break;
    }
}

function keyUp(event) {

    switch (event.key) {
        case "w":
            moving = "";
            break;

        case "s":
            moving = "";
            break;

        case "d":
            rotating = "";
            break;

        case "a":
            rotating = "";
            break;

        default:
            break;
    }
}

async function getImage(x, y, xImg, w, h) {
    const response = await fetch("brick.png");
    image = await response.blob();
    let img = await createImageBitmap(image, xImg * 310, 0, w, 310);

    game.screen.canvas.drawImage(img, x, y, w, h);
}