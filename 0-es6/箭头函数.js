let noParam = function(){
    return 7;
}

let noParamA = () =>7;
let sum = function( num1 , num2){
    return num1 + num2;
}
    //带参数的箭头函数
var sumA = (num1 , num2) =>num1 + num2;

let sumAdd5 = function( num1 , num2){
    num1 = num1 + 5;
    num2 = num2 + 5;
    return num1 + num2;
}
    //当函数有多行，函数体的箭头函数就这样写
    let sumAdd5A = (num1 , num2) => {
        num1 = num1 + 5;
        num2 = num2 + 5;
        return num1 + num2;
    }




    