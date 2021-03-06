// Enemies our player must avoid
class Enemy {

//Using "speed" as a parameter here will be very useful later    
    constructor(x, y, speed){
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed= speed;
    }

    checkCollisions() {
       return Math.abs(this.y-player.y) < 30 && Math.abs(this.x-player.x) < 60; 
    }
    
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
   update(dt){
       this.x += this.speed * dt;
    if(this.checkCollisions()) {
      player.x = 204;
      player.y = 400;
    }
       if (this.x >= 500) {
       this.x = -150;
    }
  };

// Draw the enemy on the screen, required method for game
render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
};

//We will use the third parameter to move the player
class Player {
    constructor(x, y, moves){
        this.x = x;
        this.y = y;
        this.moves = moves; 
        this.sprite = 'images/char-horn-girl.png';
    }
    
//The player must not go off screen, I also avoided 
//"small movements" 
     update(x, y) {
         
        if (this.x >= 410) {
            this.x = 410;
        }
         
        if (this.x <= 0) {
            this.x = 0;
        }

        if (this.y > 400) {
            this.y = 400;
        }    
        
        if (this.y <= -5) {
            this.y = -5;
        }   
}

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }; 

    handleInput(inputKey) { 
        switch (inputKey){
            case 'left':
            this.x -= this.moves + 103;
            break;
            case 'up':
            this.y -= this.moves + 85;
            break;
            case 'right':
            this.x += this.moves + 103;
            break;
            case 'down':
            this.y += this.moves + 85;
            break;  
        } 
        
        //When the player arrives at the water
        if (this.y <= 0) {
            setTimeout(() => {
            modal.style.visibility= "visible";
            }, 100);
          }
        }  
    
    };
   
//2 bugs for every line with different speed
const allEnemies = [new Enemy(-100, 60, 50), 
new Enemy(-150, 140, 100),
new Enemy(-60, 60, 250), 
new Enemy(-70, 140, 350), 
new Enemy(-200, 225, 300), 
new Enemy(-90, 225, 150)];

//Coordinates where the player starts
const player = new Player(204, 400, 0);

//Finishing game modal
const modal = document.querySelector('.modal');

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
