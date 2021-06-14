const Asteroid = require ('./asteroid.js');
const MovingObject = require ('./moving_object.js')
const Ship = require('./ship.js');

function Game() {
  this.DIM_X = 1000;
  this.DIM_Y = 600;
  this.NUM_ASTEROIDS = 5;
  this.addAsteroids()
  this.addShip()
  // debugger
  
}

Game.prototype.addAsteroids = function() {
  this.asteroids = [];
  for(let i = 0; i < this.NUM_ASTEROIDS; i++) {
    let options = {"pos": this.randomPosition()}
    let as = new Asteroid(options, this)
    this.asteroids.push(as)
  }
}

Game.prototype.addShip = function() {
  this.ship = new Ship({ "pos": this.randomPosition() }, this)
}

Game.prototype.allObjects = function() {
  return this.asteroids.concat([this.ship])
}

Game.prototype.randomPosition = function() {
  return [Math.random() * this.DIM_X, Math.random() * this.DIM_Y]
}
 
Game.prototype.moveObjects = function() {
  // debugger
  for (obj of this.allObjects()) {
    obj.move()
  }
}

Game.prototype.checkCollisions = function() {
  for (let i = 0; i < this.asteroids.length; i++) {
    
    if (this.asteroids[i].isCollidedWith(this.ship)) {
      // debugger
      console.log('Collision')
      // debugger
      this.asteroids[i].collideWith(this.ship)
    }
    
  }
}

Game.prototype.remove = function(asteroid) {

  asteroid.vel = 0
  asteroid.pos[0] += 1200

}

Game.prototype.step = function() {
  this.moveObjects()
  this.checkCollisions()
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, 1000, 600)
  for(obj of this.allObjects()) {
    obj.draw(ctx)
  }
}

Game.prototype.wrap = function(pos) {
  return [(pos[0] + this.DIM_X) % this.DIM_X, (pos[1] + this.DIM_Y) % this.DIM_Y]
}

module.exports = Game


