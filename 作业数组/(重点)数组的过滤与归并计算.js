let players = [{name:"james",age:36,champions:3},
 {name:"curry",age:31,champions:3},
 {name:"kobe",age:39,champions:5}]
players.forEach(function(value,index,array){
console.log(`<tr>${value.name}</tr>`)
})

let ageGt30Players = players.filter(function(value,index,array){
    return value.age > 30
})
console.log(ageGt30Players)
let young5Plauers = ageGt30Players.map(function(value,index ,array){
    return {name:value.name,age: value.age - 5, champions:value.champions}
})
console.log (young5Plauers)
let championsNums = young5Plauers.reduce(function(prev,value,index,array){
    return prev + value.champions
},0)
console.log(championsNums)