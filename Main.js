const fps = 30;
const scale = 10;
const MoveSpeed = 3;
const rotateSpeed = 0.12;

const doorSpeed = 0.05;
const pushSpeed = 0.05;

const resolution = 1;

const Gamewidth  = 640;
const Gameheight = 480;

let moving = "";
let rotating = "";

document.addEventListener('keydown', keyPressed);
document.addEventListener('keyup', keyUp);
document.addEventListener('click', mouseDown);

document.getElementById("Map").addEventListener('click', getCords);

// const roofWorld = [
//     [2, 2, 2, 2, 1, 1, 1, 1, 1, 1],
//     [2, 0, 0, 2, 1, 0, 0, 0, 0, 1],
//     [2, 0, 0, 2, 1, 0, 0, 1, 0, 1],
//     [2, 0, 0, 2, 1, 0, 0, 0, 0, 1],
//     [2, 0, 0, 0, 0, 0, 1, 1, 1, 1],
//     [2, 2, 2, 2, 1, 0, 1, 3, 3, 3],
//     [1, 1, 1, 1, 1, 0, 0, 0, 0, 3],
//     [1, 0, 0, 0, 0, 0, 1, 3, 0, 3],
//     [1, 0, 0, 0, 0, 0, 1, 3, 0, 3],
//     [1, 1, 1, 1, 1, 1, 3, 3, 3, 3]
// ];

// const World = [
//     [2, 2, 2, 2, 1, 1, 1, 1, 1, 1],
//     [2, 0, 0, 2, 1, 0, 0, 0, 0, 1],
//     [2, 0, 0, 2, 1, 0, 0, 0, 0, 1],
//     [2, 0, 0, 2, 1, 0, 0, 0, 0, 1],
//     [2, 0, 0, 0, 0, 0, 1, 1, 1, 1],
//     [2, 2, 2, 2, 1, 0, 1, 3, 3, 3],
//     [1, 1, 1, 1, 1, 0, 0, 0, 0, 3],
//     [1, 0, 0, 0, 0, 0, 1, 3, 0, 3],
//     [1, 0, 0, 0, 0, 0, 1, 3, 0, 3],
//     [1, 1, 1, 1, 1, 1, 3, 3, 3, 3]
// ];

let map;
let game;
let player;
let HUD;

// Begins the program
window.onload = setup();

// Runs before at the beginning of the program
function setup() {

    // Initialises player
    player = new Player(map.screen, 300, 265);

    // Initialises both canvases
    map  = new Map(document.getElementById("Map"));
    game = new Game(document.getElementById("Game"));
    HUD  = new Hud(game.screen, player);

    // Changes the size of the canvas
    map.screen.setSize(World[0].length * scale, World.length * scale);
    game.screen.setSize(Gamewidth, Gameheight);
    

    // Changes the background of the canvas
    map.screen.background("#555");
    game.screen.background("#FFF");



    // Begins the game
    setInterval(draw, 1000 / fps);
    // draw();

    // setTimeout(() => {
    //     draw();
    // }, 2000);


    for (let y = 0; y < World.length; y++) {
        for (let x = 0; x < World[y].length; x++) {

            if (`${World[y][x]}`[0] === '4') {
                if (!Doors[y]) {
                    Doors[y] = {};
                }
                Doors[y][x] = 1;
            }

        }
    }

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

    // HUD 
    getImage(17, 393, 0, 604, 604, 79, "HUD");
    getImage(0, 0, 0, 640, 640, 480, "HUDCase")
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
        case "e":
            console.log("Interact");
            player.open();
            player.push();
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

function getImage(x, y, xImg, w, wImg, h, id) {
    const image = document.getElementById(id);

    const width = image.width;
    const height = image.height;

    game.screen.canvas.drawImage(image, xImg * width, 0, w, height, x, y, wImg, h);

}

function mouseDown(event) {

    const loop = setInterval( () => {game.gunAnimation(loop)}, 1000 / 15);
}

function getCords(event) {
    const rect = game.screen.element.getBoundingClientRect();
    // console.log( event.clientX - game.screen.canvas.canvas.offsetLeft, event.clientY - 80);
}

function passable(sprite) {

        
    switch (sprite.id) {
        case "greenLight":
            return true;
            break;
        case "chandelier":
            return true;
            break;
        case "foodPack":
            player.health += 5;
            return true;
            break;
        case "ammoPack":
            player.ammo += 5;
            return true;
            break;
        case "medPack":
            player.health += 10;
            document.getElementById("health").textContent = "Health: " + player.health;
            sprites[sprites.indexOf(sprite)].x = 0;
            return true;
            break;
        case "stew":
            player.health += 3;
            document.getElementById("health").textContent = "Health: " + player.health;
            sprites[sprites.indexOf(sprite)].x = 0;
            return true;
            break;

        default:
            return false;
    }


    
}