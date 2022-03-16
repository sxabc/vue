let players=["cu","skdad","skda","jack","aa","vbb"];
console.log(players.indexOf("cu"))
console.log(players.lastIndexOf("skda"))

let findOne=players.find(function(val,index,arr){
    return val.includes("cu")
})
console.log(findOne)
let findOneIndex=players.findIndex(function(val,index,arr){
    return val.includes("cu")
})

let finOne = players.find((val,index,arr)=>val.includes("cu"))