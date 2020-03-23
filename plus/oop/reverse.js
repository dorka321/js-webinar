/**
 * It reverses the given object, i.e. return a copy of the object 
 * where the keys have become the values and the values the keys
 * 
 * @param {object} o the object
 * @returns {object} the new object
 */
function reverse(o){
    if (typeof o !== "object"){
        throw new Error("param is not an object");
    }
    var reversed = {};
    for(const key in o){
        const value = o[key];
        reversed[value] = key;
    }
    return reversed;
}
module.exports = reverse;