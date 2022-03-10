if(true){
    var externalVal = "externalVal";
}
function a(){
    var funVal = "funVal";
    console.log(externalVal + "+++++" + funVal);
}
a()
if(true){
    console.log(externalVal);
    //console.log(funVal);
}