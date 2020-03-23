/**
 * It returns the property names of the given object.
 * 
 * @param {object} o the object
 * @returns {string[]} the list of the properties of the object
 *                     or empty array if it is not an object
 */
var obj = { 1: 'a', 2: 'b', 3: 'c'};
console.log(Object.keys(obj));