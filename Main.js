const fps = 60;
const scale = 60;

const World = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1]
];

let map;
let game;
let player;

// Begins the program
window.onload = setup();

// Runs before at the beginning of the program
function setup() {

    // Initialises both canvases
    map  = new Map( document.getElementById("Map") );
    game = new Game( document.getElementById("Game") );

    // Changes the size of the canvas
    map.screen.setSize(300, 300);
    game.screen.setSize(533, 300);

    // Changes the background of the canvas
    map.screen.background("#555");
    game.screen.background("#000");

    // Initialises player
    player = new Player(map.screen, 120, 180);

    // Begins the game
    //setInterval(draw, 1000/fps);
    draw();

    // window.onload needs a return
    return null;
}

function  draw() {
    // Changes the background of the canvas
    map.screen.background("#555");
    game.screen.background("#000");

    map.draw();
    game.draw();

    player.draw();
}
