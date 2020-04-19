/*
 * Rewrite the following code to use async/await 
 */
// module.exports = function loadJson(url) {
//     return fetch(url)
//         .then(response => {
//             if (response.status == 200) {
//                 return response.json();
//             } else {
//                 throw new Error(response.status);
//             }
//         });
// };

module.exports = async (url) => {
    const response = await fetch(url);

    if (response.status == 200) {
        return response.json();
    } else {
        throw new Error(response.status);
}}




// module.exports = async (url) => {
//     try {
//         if(await fetch(url)){
//             if (response.status == 200) {
//                 return response.json();
//         }}}
//     catch(e){
//         throw new Error(response.status);
//         }
//     }


    //1
    // try{
    // const v = await loadJson;
    //     if (response.status == 200) {
    //     return response.json();
    //     }
    // }catch(e){
    //     throw new Error(response.status);
    // }
    // module.exports = new Promise (
    //     function loadJson(url) {
    //         return fetch(url)
    // });  
//2
    // module.exports = loadJson;

    // async function loadJson(url, done){
    //     setTimeout(function(){
    //         return fetch(url);
    //         done();
    //     }; 1000);        
    // }
    // try{
    // const v = await loadJson;
    // if (response.status == 200) {
    //     return response.json();
    // }} catch {
    //     throw new Error(response.status);
    // }

    // async function loadJson(url) {

    //     let p = new Promise((resolve, reject) => {
    //         setTimeout(() => resolve(fetch(url)), 1000)
            
            
    //     });
    //     let result = await p;
    //     if (response.status == 200) {
    //        // return response.json();
    //        return result;
    //     } else {
    //         throw new Error(response.status);
    //     }
    // }
    // module.exports = loadJson();