/**
 * It determines, whether the given array is sorted in
 * alphabetically ascending order.
 * 
 * It ignores
 *  - case of the character
 *  - given special characters (nothing by default)
 *  - whitespaces
 * 
 * @param {string[]} items the subject items
 * @param {string} ignore characters to ignore
 * @returns {boolean} true if the array is properly sorted,
 *                    false otherwise
 */


module.exports = function arraySorted(items, ignore){

    if(!Array.isArray(items)){
        return false;
    }
    let newItems = [];
    for(let i = 0; i < items.length; ++i){
        let newItem = String(items[i]).toLocaleLowerCase();
        newItem = newItem.replace(/\s+/g,'');
        if(ignore){
            for(let j = 0; j < ignore.length; ++j){
                newItem = newItem.replace(new RegExp("\\" + ignore[j],"g"),'');
            }
        }
        newItems.push(newItem);
    }
    for(let i = 0; i<newItems.length -1; ++i){
        if(newItems[i] > newItems[i+1]){
            return false;
        }
    }
    return true;
}