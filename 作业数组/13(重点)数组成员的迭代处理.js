let players = [{name:"james",age:36,champions:3},
 {name:"curry",age:31,champions:3},
 {name:"kobe",age:39,champions:5}]
players.forEach(function(value,index,array){
console.log(`<tr>${value.name}</tr>`)
})