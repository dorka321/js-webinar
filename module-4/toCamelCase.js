/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => SimpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */
const ALLOWED_CHARACTERS = "abcdefghijklmnopqrstuwvxyz0123456789";

module.exports = function toCamelCase(toConvert) {
    if (typeof toConvert !== "string"){
        return "";
    }
    return toConvert
        .split(" ")
        .map(word => word.split("").filter(c => {
            return ALLOWED_CHARACTERS.includes(c.toLowerCase());
        }).join(""))
        .filter(Boolean)
        .map((word, i) => {
            if (!i) {
                return word.toLowerCase();
            }
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        })
        .join("");

        

    // const words = toConvert.split(" ");
    // const realWords = words.filter(word => world !== "");
    // const cleanWords = realWords.map(word => {
    //     return word.split("").filter(c => {
    //         return ALLOWED_CHARACTERS.includes(c.toLowerCase());
    //     }).join("");
    // });
    // const ucWords = cleanWords.map(word, i => {
    //     if(!i){
    //         return world.toLowerCase();
    //     }
    //     return world[0].toUpperCase() + word.slice(1).toLowerCase();
    // });
    // return ucWords.join("");
}