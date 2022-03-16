var p =new Promise ( function ( resolve, reject) {

    if(异步操作成功){
    resolve ( 'success ' );
    }
    else {
    reject( 'Failure ' ) ;
    }
    });
    p.then ( function (data) {
        return new Promise ( (resolve) =>{
        resolve( data + "xxx1")
        })
    }).then ( function (data) {
        return Promise.resolve( data + "xxx2")
    }).then (data =>{
        return data + "xxx3"
    }).catch ( function (error){
})
// //方式一:
// return new Promise ( (resolve.reject) =>{
//     reject( {errorMsg : ""})
// })
// //方式二:
// return Promise.reject( {errorMsg : ""})
// //方式三:
// throw {errorMsg : ""}



// var p1 = new Promise ( (resolve)=>{
//     resolve ( {msg: "1"})
// }),p2 = new Promise ( (resolve) =>{
//     resolve( {msg : "2"})
// }),p3 = new Promise ( (resolve) =>{
//     resolve ( {msg : "3"})
// });
// Promise.all([p1, p2, p3 ] ).then ( function (results) {
//     console.log (results);
// });


var p = new Promise(function(resolve, reject) {
    // 异步操作
    if(异步操作成功) {
    resolve('Success');
     }
    else {
    reject('Failure');
     }
    });
    p.then(function(data) {

    return new Promise((resolve) =>{
        resolve( data + "xxx1")
    })
}).then(function(data) {

return Promise.resolve( data + "xxx2")
}).then(data => {
return data + "xxx3"
}).catch(function(error) {

})