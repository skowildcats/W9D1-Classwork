const MovingObject = require('./moving_object.js')

function Bullet() {

}

function Surrogate() { }
Surrogate.prototype = MovingObject.prototype
Bullet.prototype = new Surrogate()
Bullet.prototype.constructor = Bullet





module.exports = Bullet