/**
 * It deletes the given property of the given object
 * and returns the new object.
 * The function must not modify the original object!
 * 
 * @param {object} o the object
 * @param {string} key the name of the property to delete
 * @returns {object} the new object without the given property
 */
function del(o, key){
    if (typeof o !== "object"){
        throw new Error("param is not an object");
    }
    if (typeof key !== "string"){
        throw new Error("keys not set");        
    }
    const copy = Object.assign({}, o);
    delete copy[key];
    return copy;
}
module.exports = del;