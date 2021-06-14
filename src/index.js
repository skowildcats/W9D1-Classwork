const MovingObject = require ("./moving_object.js")
const Asteroid = require ("./asteroid.js")
const Game = require("./game.js")
const GameView = require('./game_view.js')
window.MovingObject = MovingObject;

// const mo = new MovingObject({
//   "pos": [30, 30],
//   "vel": [10, 10],
//   "radius": 5,
//   "color": "#00FF00"
// });

// const as = new Asteroid({ pos: [30, 30] });

document.addEventListener('DOMContentLoaded', () => {
  const canvasE1 = document.getElementById('game-canvas');

  const ctx = canvasE1.getContext('2d');
  let game = new Game();
  // debugger

  let view = new GameView(ctx, game)
  view.start()
  
})

