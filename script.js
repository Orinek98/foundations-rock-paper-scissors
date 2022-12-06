let playerPoints = 0;
let cpuPoints = 0;
let round = 0;

function score(){
    document.getElementById("rounds").innerHTML ="";
    var r = document.createTextNode("Round: "+ round +"   Player: " + playerPoints + "  CPU: "+cpuPoints); 
    document.getElementById("rounds").appendChild(r);
}

function newGame(){
    round = 0;
    playerPoints = 0;
    cpuPoints = 0;
    document.getElementById("rounds").innerHTML ="";
    document.getElementById("winner").innerHTML ="";
    document.getElementById("game").innerHTML ="";
  
}

function winner(){
    document.getElementById("winner").innerHTML ="";
    var w;
    if(playerPoints > cpuPoints)
        w = document.createTextNode("Complimenti hai vinto la partita!");
    else if(playerPoints == cpuPoints)
        w = document.createTextNode("La partita è finita pari!");
    else
        w = document.createTextNode("Mi dispiace l'avversario ha vinto la partita!");
    document.getElementById("winner").appendChild(w);

}

function getComputerChoice(){
    const move =[
        'rock',
        'paper',
        'scissors'
    ];
    return move[Math.floor(Math.random()*3)]; 
}


function playround(move){
    if(round == 5){
        winner();
        return;
    }
    var p = move;
    var c = getComputerChoice();
    var out;
    document.getElementById("game").innerHTML ="";
    round++;
    if((p == 'rock' && c == 'scissors') || (p == 'paper' && c == 'rock') || (p == 'scissors' && c == 'paper')){
        playerPoints++;
        out = document.createTextNode("Hai vinto il round! "+p+" batte " + c +".");
    }
    else if(p == c){
        out = document.createTextNode("Round pari!");
    }
    else{
        cpuPoints++;
        out = document.createTextNode("Hai perso il round! "+c+" batte " + p +".");
    }
    document.getElementById("game").appendChild(out);
    score();
}