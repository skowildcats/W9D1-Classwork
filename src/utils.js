const Util = {

  inherits(childClass, parentClass) {
    function Surrogate() {}
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
    childClass.prototype.constructor = childClass;
  },

  dist(start, finish) {
    return ((start[0] - finish[0]) ** 2 + (start[1] - finish[1]) ** 2) ** (1 / 2);
  },

  norm(loc) {
    return dist([0, 0], loc);
  },

  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  // Scale the length of a vector by the given amount.
  scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  }
};

module.exports = Util;




