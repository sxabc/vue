let players =[
    {name:"james",age:78},
    {name:"cudsd",age:7},
    {name:"james2",age:79},
]
let isGt30 =players.every(function(value,index,arr){
    return value.age>30
})
console.log(isGt30)
let isContainCu = players.some(function(value,index,arr){
    return value.name.includes("cu")
})
console.log(isContainCu)