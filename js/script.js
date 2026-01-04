const rules = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"]
};
let choices = [];
let randomNumber = 0;
let wins = 0;
let losses = 0;

function elem(str){
    return document.querySelector(str);
}

function update(target, val){
    elem(target).innerHTML = val;
}

function player(choice){
    if (!choices.includes(choice)) {
        update(".result", `<p style="color: white;">Not valid input!</p>`);
        update(".userChoice", "");
        return false;
    }

    update(".userChoice", choice);
    return true;
}

function getRandomComputerChoice(){
    randomNumber = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomNumber];
    update(".computerChoice", computerChoice);
    return computerChoice;
}

function chooseWinner(playerChoice, computerChoice){
    if (playerChoice === computerChoice) {
        update(".result", `<p style="color: white;">No one wins!</p>`);
        return;
    }

    if (rules[playerChoice].includes(computerChoice)) {
        win();
    } else {
        lose();
    }

    update(".wins", wins);
    update(".losses", losses);
}

function play(inpt){
    if(!player(inpt)) return;
    chooseWinner(inpt, getRandomComputerChoice());
}

function win() {
    update(".result", `<p style="color: lightgreen;">You Won!</p>`);
    wins++;
}

function lose() {
    update(".result", `<p style="color: red;">Computer Wins!</p>`);
    losses++;
}

function reset(){
    wins = 0;
    losses = 0;
    update(".wins", wins);
    update(".losses", losses);
    [".result", ".userChoice", ".computerChoice"].forEach(sel =>
        update(sel, "")
    );
}

elem(".play").addEventListener("click", function(){
    const playerChoice = elem(".input").value.toLowerCase();
    play(playerChoice);
    elem(".input").value = "";
});

elem(".reset").addEventListener("click", function(){
    reset();
});