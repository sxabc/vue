let values = [1,2,5,10,19]
values.reverse()
console.log(values.toString())
values.sort()
console.log(values.toString())
function compare(value1,value2){
    return value1 - value2
}
values.sort(compare)
console.log(values.toString())
