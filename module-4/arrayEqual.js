/**
 * It determines, whether the given two arrays
 * are equal, by considering the number of elements,
 * those order and value, in all levels.
 * 
 * It prints out a message in case of any
 * difference in any array, using console.warn!
 * 
 * @param {Array} first The first array
 * @param {Array} second The second array
 * @returns {boolean} true if the two arrays are equal,
 *                    false otherwise
 */


module.exports = function arrayEqual(first, second){

    if(!Array.isArray(first)||!Array.isArray(second)){
        return false;
    }
    if(first.length !== second.length){
        console.warn(`not equals ${first.length} and ${second.length}`);
        return false;
    }
    for(let i = 0; i < first.length; ++i){
        if(Array.isArray(first[i])||Array.isArray(second[i])){
            if(!arrayEqual(first[i], second[i])){
                console.warn(`not equals ${first[i]} and ${second[i]}`);
                return false;
            }
        } else if(first[i] !== second[i]){
                console.warn(`not equals ${first[i]} and ${second[i]}`);
                return false;
        }
    }
    return true;
}


// for(let i = 0; i < first.length; ++i){
//     for(let j = 0; j < second.length; ++j){  

//     if(i === j){
//         return true;
//     } else if(first[i] === second[j]){
//         return true;
//     } else {
//         return false;
//     }
// }}

// for(let i; i<first.length; ++i){

// }


