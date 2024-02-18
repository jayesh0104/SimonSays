let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let highestScore=0;
let h2=document.querySelector('h2');

document.addEventListener("keypress",function(){
    if(started== false){
        console.log("Game Started");
        started=true;
    levelUp();
    }
})
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },150);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },150);
}
function levelUp() {
    userseq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let btn=["red","yellow","purple","green"];
    let randInd = Math.floor(Math.random() * btn.length);
    let randColor = btn[randInd];
    let randBtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    btnFlash(randBtn);
}

function checkAns(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerText=`Game over, your score is ${level} \npress any key to start the game!`;
        document.querySelector('body').style.backgroundColor="red";
        highestScore=level;
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";
        },150);
        gameReset();
        let h3=document.querySelector("#highestScore");
        h3.innerText=`Highest Score: ${highestScore}`;
    }
}
function gameReset(){
    level=0;
    userseq=[];
    gameseq=[];
    started=false;
}

function btnPress(){
    console.log(this);
    let btn=this;
    userseq.push(btn.classList[1]);
    console.log(userseq);
    userFlash(btn);
    checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}
