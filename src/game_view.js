const Game = require('./game.js')
// const KeyMaster = require('./keymaster.js')

function GameView(ctx, game) {
  this.ctx = ctx
  this.game = game
}

GameView.prototype.start = function() {
  setInterval(() => {
    this.game.step()
    this.game.draw(this.ctx)
    KeyMaster.key((key) => console.log(key))
  }, 20)
}

module.exports = GameView;