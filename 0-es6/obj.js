// //定义对象
// function Player (name , age) {
//     this.name = name;
//     this.age = age;
// }
// //定义对象的成员函数toPrint
// Player.prototype.toPrint = function() {
//     console.log(this.name + "----" + this.age);
// }

// var player1 = new Player( "Tom",30);
// var player2 = new Player("Jack",20);
// //调用成员函数
// player1.toPrint();
// player2.toPrint();

class Player{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    toPrint(){
        console.log(this.name + "------" + this.age );
    }
}
var player1 = new Player("jam",33);
player1.toPrint();


class Player2 extends Player{
    constructor(){
        super();
        this.name="jack";
        this.age=11;
    }
}
var player2 = new Player2();
player2.toPrint();




//字面量
// let name = "curry";
// let age = 33
// let player3 = {
//     name : name,
//     age : age,
//     toPrint:function(){
//         console.log(player3)
//     }
// }
// player3.toPrint();

//es6简写
let name = "curry"
let age = 332
let player3 = {
    name,//注意这里等同于name : name
    age,//注意这里等同于age : age

    toPrint(){//这里可以省去function()
        console.log(player3)
    }
}
player3.toPrint();



