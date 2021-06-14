const MovingObject = require('./moving_object.js')
const Util = require('./utils.js')


function Ship(options, game) {
  options.color = 'pink';
  options.pos = options.pos 
  options.radius = 20;
  options.vel = [0,0];
  // debugger

  MovingObject.call(this, options, game);
}


Util.inherits(Ship, MovingObject)

Ship.prototype.relocate = function() {
  this.pos = this.game.randomPosition()
  this.vel = [0,0]
}

Ship.prototype.power = function(impulse) {
  
}


module.exports = Ship