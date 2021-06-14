// const Ship = require('./ship.js')
const Util = require('./utils.js') 

function MovingObject(options, game) {
  this.pos = options["pos"]
  this.vel = options["vel"]
  this.radius = options["radius"]
  this.color = options["color"]
  this.game = game
}

MovingObject.prototype.move = function() {
  this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]]
  this.pos = this.game.wrap(this.pos)
}

MovingObject.prototype.draw = function(ctx) {
  ctx.beginPath()
  ctx.fillStyle = this.color
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true)
  ctx.fill()
}

MovingObject.prototype.isCollidedWith = function(otherMovingObject) {
  if (Util.dist(this.pos, otherMovingObject.pos) < this.radius + otherMovingObject.radius) {
    return true
  } else {
    return false
  }
}

MovingObject.prototype.collideWith = function() {

}


module.exports = MovingObject;
