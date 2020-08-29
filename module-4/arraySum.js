/**
 * It recieves an array of strings, integers and
 * array like itself.
 * Return the summary of all integers in it on * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */
module.exports = function arraySum(elements){

    if(!Array.isArray(elements)){
        return 0;
    }
    let sum = 0;
    for(let i = 0; i<elements.length; ++i){
        if(typeof elements[i] == "number"){
            sum = sum + elements[i];
        }
        else if(Array.isArray(elements[i])){
            sum += arraySum(elements[i]);
        }   
    }
    return sum;
}