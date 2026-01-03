var imgs = ["Rock.png", "Paper.png", "Lizard.png"];
var choices = ["rock", "paper", "scissors"];
var randomNumber = 0;
var computerChoice = "";
var playerChoice = "";
var wins = 0;
var losses = 0;

function elem(str){
    return document.querySelector(str);
}

function update(target, val){
    elem(target).innerHTML = val;
}

function player(choice){
    var invalid = 0;
    choices.forEach(function(val, idx){
        if(choice === choices[idx]){
            update(".userChoice", choice);
        } else {
            invalid++;
        }
    });
    if(invalid === choices.length){
        update(".result", `<p style="color: white;">Not valid input!</p>`);
    }
}

function getRandomComputerChoice(){
    randomNumber = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomNumber];
    update(".computerChoice", computerChoice);
}

function chooseWinner(){
    choices.forEach(function(val, idx){
        if(playerChoice === computerChoice){
            update(".result", `<p style="color: white;">No one wins!</p>`);
        } else if(playerChoice === choices[idx]){
            if(idx === 0){
                if(computerChoice === "paper"){
                    update(".result", `<p style="color: red;">Computer Wins!</p>`);
                    losses++;
                } else if(computerChoice === "scissors"){
                    update(".result", `<p style="color: lightgreen;">You Won!</p>`);
                    wins++;
                }
            } else if(idx === 1){
                if(computerChoice === "rock"){
                    update(".result", `<p style="color: green;">You Won!</p>`);
                    wins++;
                } else if(computerChoice === "scissors"){
                    update(".result", `<p style="color: red;">Computer Wins!</p>`);
                    losses++;
                }
            } else {
                if(computerChoice === "paper"){
                    update(".result", `<p style="color: green;">You Won!</p>`);
                    wins++;
                } else if(computerChoice === "rock"){
                    update(".result", `<p style="color: red;">Computer Wins!</p>`);
                    losses++;
                }
            }
        }
    });
    update(".wins", wins);
    update(".losses", losses);
}

function play(inpt){
    player(inpt);
    getRandomComputerChoice();
    chooseWinner();
}

function reset(){
    wins = 0;
    losses = 0;
    update(".wins", 0);
    update(".losses", 0);
    update(".result", "");
    update(".userChoice", "");
    update(".computerChoice", "");
}

elem(".play").addEventListener("click", function(){
    playerChoice = elem(".input").value.toLowerCase();
    play(playerChoice);
    elem(".input").value = "";
});

elem(".reset").addEventListener("click", function(){
    reset();
});