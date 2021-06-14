/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\")\nconst Util = __webpack_require__ (/*! ./utils.js */ \"./src/utils.js\")\nconst Ship = __webpack_require__ (/*! ./ship.js */ \"./src/ship.js\")\n\nfunction Asteroid(options, game) {\n  options.color = 'grey';\n  options.pos = options.pos \n  options.radius = 20;\n  options.vel = Util.randomVec(1);\n\n  MovingObject.call(this, options, game);\n}\n\nUtil.inherits(Asteroid, MovingObject)\n\nAsteroid.prototype.collideWith = function(otherObject) {\n  // MovingObject.collideWith.call(this)\n  // debugger\n  if (otherObject instanceof Ship) {\n    otherObject.relocate()\n  } else {\n    this.game.asteroids.splice(this.game.asteroids.find(el => el === this), 1)\n  }\n}\n\n\n\nmodule.exports = Asteroid;\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__ (/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst MovingObject = __webpack_require__ (/*! ./moving_object.js */ \"./src/moving_object.js\")\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\nfunction Game() {\n  this.DIM_X = 1000;\n  this.DIM_Y = 600;\n  this.NUM_ASTEROIDS = 5;\n  this.addAsteroids()\n  this.addShip()\n  // debugger\n  \n}\n\nGame.prototype.addAsteroids = function() {\n  this.asteroids = [];\n  for(let i = 0; i < this.NUM_ASTEROIDS; i++) {\n    let options = {\"pos\": this.randomPosition()}\n    let as = new Asteroid(options, this)\n    this.asteroids.push(as)\n  }\n}\n\nGame.prototype.addShip = function() {\n  this.ship = new Ship({ \"pos\": this.randomPosition() }, this)\n}\n\nGame.prototype.allObjects = function() {\n  return this.asteroids.concat([this.ship])\n}\n\nGame.prototype.randomPosition = function() {\n  return [Math.random() * this.DIM_X, Math.random() * this.DIM_Y]\n}\n \nGame.prototype.moveObjects = function() {\n  // debugger\n  for (obj of this.allObjects()) {\n    obj.move()\n  }\n}\n\nGame.prototype.checkCollisions = function() {\n  for (let i = 0; i < this.asteroids.length; i++) {\n    \n    if (this.asteroids[i].isCollidedWith(this.ship)) {\n      // debugger\n      console.log('Collision')\n      // debugger\n      this.asteroids[i].collideWith(this.ship)\n    }\n    \n  }\n}\n\nGame.prototype.remove = function(asteroid) {\n\n  asteroid.vel = 0\n  asteroid.pos[0] += 1200\n\n}\n\nGame.prototype.step = function() {\n  this.moveObjects()\n  this.checkCollisions()\n}\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0, 0, 1000, 600)\n  for(obj of this.allObjects()) {\n    obj.draw(ctx)\n  }\n}\n\nGame.prototype.wrap = function(pos) {\n  return [(pos[0] + this.DIM_X) % this.DIM_X, (pos[1] + this.DIM_Y) % this.DIM_Y]\n}\n\nmodule.exports = Game\n\n\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\n// const KeyMaster = require('./keymaster.js')\n\nfunction GameView(ctx, game) {\n  this.ctx = ctx\n  this.game = game\n}\n\nGameView.prototype.start = function() {\n  setInterval(() => {\n    this.game.step()\n    this.game.draw(this.ctx)\n    KeyMaster.key((key) => console.log(key))\n  }, 20)\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__ (/*! ./moving_object.js */ \"./src/moving_object.js\")\nconst Asteroid = __webpack_require__ (/*! ./asteroid.js */ \"./src/asteroid.js\")\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\")\nwindow.MovingObject = MovingObject;\n\n// const mo = new MovingObject({\n//   \"pos\": [30, 30],\n//   \"vel\": [10, 10],\n//   \"radius\": 5,\n//   \"color\": \"#00FF00\"\n// });\n\n// const as = new Asteroid({ pos: [30, 30] });\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const canvasE1 = document.getElementById('game-canvas');\n\n  const ctx = canvasE1.getContext('2d');\n  let game = new Game();\n  // debugger\n\n  let view = new GameView(ctx, game)\n  view.start()\n  \n})\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// const Ship = require('./ship.js')\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\") \n\nfunction MovingObject(options, game) {\n  this.pos = options[\"pos\"]\n  this.vel = options[\"vel\"]\n  this.radius = options[\"radius\"]\n  this.color = options[\"color\"]\n  this.game = game\n}\n\nMovingObject.prototype.move = function() {\n  this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]]\n  this.pos = this.game.wrap(this.pos)\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.beginPath()\n  ctx.fillStyle = this.color\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true)\n  ctx.fill()\n}\n\nMovingObject.prototype.isCollidedWith = function(otherMovingObject) {\n  if (Util.dist(this.pos, otherMovingObject.pos) < this.radius + otherMovingObject.radius) {\n    return true\n  } else {\n    return false\n  }\n}\n\nMovingObject.prototype.collideWith = function() {\n\n}\n\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\")\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\")\n\n\nfunction Ship(options, game) {\n  options.color = 'pink';\n  options.pos = options.pos \n  options.radius = 20;\n  options.vel = [0,0];\n  // debugger\n\n  MovingObject.call(this, options, game);\n}\n\n\nUtil.inherits(Ship, MovingObject)\n\nShip.prototype.relocate = function() {\n  this.pos = this.game.randomPosition()\n  this.vel = [0,0]\n}\n\nShip.prototype.power = function(impulse) {\n  \n}\n\n\nmodule.exports = Ship\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module) => {

eval("const Util = {\n\n  inherits(childClass, parentClass) {\n    function Surrogate() {}\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n\n  dist(start, finish) {\n    return ((start[0] - finish[0]) ** 2 + (start[1] - finish[1]) ** 2) ** (1 / 2);\n  },\n\n  norm(loc) {\n    return dist([0, 0], loc);\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;