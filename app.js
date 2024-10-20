let userseq = [];
let gameseq = [];

let btns = ["yellow", "green", "purple", "red"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started = true;

        levelup();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*4); 
    let randCol = btns[randIdx];
    let randBtn = document.querySelector(`.${randCol}`);
    gameseq.push(randCol);
    console.log(gameseq)
    gameFlash(randBtn);
}

function checkAns(idx){
    if(gameseq[idx] == userseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup, 1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "bisque";
        },150);
        restart();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id")
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click", btnPress);
}

function restart(){
    userseq = [];
    gameseq = [];
    level = 0;
    started = false;
}

