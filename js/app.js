// Enemies our player must avoid
class Enemy {

//Using "speed" as a variable here will be very useful later    
    constructor(x, y, speed){
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed= speed;
    }


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
update(dt){
    this.x += this.speed * dt;
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    }

// Draw the enemy on the screen, required method for game
render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor(x, y){
        this.sprite = 'images/char-horn-girl.png';
        this.x = x;
        this.y = y;
    }

    update() {}

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput() {
        
    }

};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

//I put a name for every enemy, 2 bugs for every line
const allEnemies = [];

const mark = new Enemy(-100, 60, 100); 
const jack = new Enemy(-150, 140, 250); 
const simo = new Enemy(-60, 60, 380); 
const carl = new Enemy(-70, 140, 500); 
const jessie = new Enemy(-200, 225, 400); 
const phil = new Enemy(-90, 225, 250);

//Fill the empty array
allEnemies.push(mark, jack, simo, carl, jessie, phil);

//Cordinates where the player starts
const player = new Player(204, 418);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
