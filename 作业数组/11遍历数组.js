let players =["curry","james","kobe"];
for(let index of players.keys()){
    console.log(index);

}
for(let elem of players.values()){
    console.log(elem)
}

for(let [index,elem] of players.entries()){
    console.log(index,elem)
}