const gettime = function(){
    //获取时间
let dt = new Date();
//获取年月日
let year = dt.getFullYear();
let month = (dt.getMonth()+1).toString().padStart(2,'0');
let day = (dt.getDate()).toString().padStart(2,'0');
//获取时分秒
let hour = (dt.getHours()).toString().padStart(2,'0');
let min = (dt.getMinutes()).toString().padStart(2,'0');
let sec = (dt.getSeconds()).toString().padStart(2,'0');


let formatStr = `${year}-${month}-${day} ${hour}:${min}:${sec}`;
return formatStr;
}

function a() {
    document.getElementsByTagName("p")[0].innerHTML=gettime();
}
