/**
 * It deletes the given property of the given object
 * and returns the new object.
 * The function must not modify the original object!
 * 
 * @param {object} o the object
 * @param {string} key the name of the property to delete
 * @returns {object} the new object without the given property
 */
const o = {
    key:"to delete",
    second:"second"
};
const a = Object.assign({}, o);

delete a.key;
console.log(a);