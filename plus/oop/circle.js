/**
 * Create the Circle class.
 *
 * @typedef {object} Circle
 * @property {number} r the radius of the circle
 * @function area return the area of the circle
 * @function perimeter return the perimeter of the circle
 */


var circle = {
    r: 4,
    area: function(r) {
        return this.r * this.r * Math.PI;
    },
    perimeter: function(r) {
        return 2 * this.r * Math.PI;
    }
}
circle.area();
circle.perimeter();
