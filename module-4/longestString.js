1/**
 * It recieves an array of strings and returns
 * the first longest string from it.
 * Also in the alphabetically first in case of more.
 *
 * @param {Array.<string>} strings
 * @returns {string} longest string or empty string in other cases
 */
module.exports = function longestString(strings) {

    if(!Array.isArray(strings)){
        return "";
    }
    strings.sort();
    let longest = "";
    for(let i = 0; i<strings.length; ++i){
        if(typeof strings[i] == "string" && longest.length < strings[i].length){
            longest = strings[i];
        }
    }
    return longest;
}