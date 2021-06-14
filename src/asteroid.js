const MovingObject = require('./moving_object.js')
const Util = require ('./utils.js')
const Ship = require ('./ship.js')

function Asteroid(options, game) {
  options.color = 'grey';
  options.pos = options.pos 
  options.radius = 20;
  options.vel = Util.randomVec(1);

  MovingObject.call(this, options, game);
}

Util.inherits(Asteroid, MovingObject)

Asteroid.prototype.collideWith = function(otherObject) {
  // MovingObject.collideWith.call(this)
  // debugger
  if (otherObject instanceof Ship) {
    otherObject.relocate()
  } else {
    this.game.asteroids.splice(this.game.asteroids.find(el => el === this), 1)
  }
}



module.exports = Asteroid;






