let p=[{
    name:"ja",age:78
},{
    name:"currry",age:45
},{
    name:"koe",age:878
}]
function com(p1,p2){
    return p1.age -p2.age
}
p.sort(com)
console.log(p)