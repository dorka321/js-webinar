/**
 * Create the Circle class.
 *
 * @typedef {object} Circle
 * @property {number} r the radius of the circle
 * @function area return the area of the circle
 * @function perimeter return the perimeter of the circle
 */

class Circle{
    constructor(r){
        if (typeof r !== "number" || r < 0){
            throw new Error("radius is not valid");
        }
        this.r = r;
    }
    getArea(){
        return this.r * this.r * Math.PI;
    }
    getPerimeter(){
        return 2 * this.r * Math.PI;
    }
}
module.exports = Circle;