let playersobje = {'0': "curry" , '1': "james" , '2': "kobe" ,length: 3};
let players = Array.from (playersobje);
console.log(players)
let playersSet = new Set([ 'curry' , 'james' , 'curry' ])
players = Array.from(playersSet) ;
console.log(players)