/**
 * It wait for the given seconds, but at most 10 seconds.
 *
 * @param {number} sec the seconds to wait
 * @returns {Promise} the promise which resolves when wait if over
 *                    or rejects if parameter is not correct
 */
// async function wait() {
//     await new Promise(resolve => setTimeout(resolve, sec));
// }

// module.exports = async function sleep(sec){
    
    
//         return new Promise(function(resolve, reject){
//             setTimeout(resolve, 10);

//         try{
//             if(await this.isPresent()){
//                 return resolve('success');
//             } else {
//                 reject('failure');
//         }} catch (e){
//             return false;
//         }
//     }, 10000)
// }
module.exports = async function wait(sec) {
    if(typeof sec !== 'number'){
        throw new Error('incorrect value');
    }
    await new Promise(resolve => setTimeout(resolve, Math.min(sec, 10) * 1000));
    
}
// module.exports = async function sleep(){
//     new Promise(function(resolve, reject){
//         if(await wait(sec)){
//             return resolve('success');
//         } else {
//             reject('failure');
//         }}, 10000)
// }