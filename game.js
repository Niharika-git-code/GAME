let gameseq = [];
let userseq = [];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns =["yellow", "red", "green", "pink"];

document.addEventListener("keypress", function () {

    if (started == false) {
        console.log("game started");
        started = true;
        levelup();
    }
});

function levelup() {
    level++;
    h2.innerText = `level ${level}`
let randIdx = Math.floor(Math.random()*3);
let randcolor =btns[randIdx];
let randbtn=document.querySelector(`.${randcolor}`);
gameseq.push(randcolor);
console.log(gameseq);

     gameflash(randbtn);
}
 function gameflash(box){
    box.classList.add("flash");
  setTimeout(function(){
box.classList.remove("flash");
  },250

);
}
 function userflash(box){
    box.classList.add("userflash");
  setTimeout(function(){
box.classList.remove("userflash");
  },250

);
}
function checkAns (){
    // console.log("current level;",level);
    let Idx = level -1;
    if (userseq[Idx]=== gameseq[Idx]){
        console.log("same value");
    }else{
         h2.innerText = `Game over! press any key to start the game `;

    }
} 

function btnpress(){
    console.log(this);
    let box= this;
    userflash(box);
    usercolor = box.getAttribute("id");
  userseq.push(usercolor);
  checkAns();
}
let allbtn = document.querySelectorAll(".box");
for (box of allbtn){
box.addEventListener("click", btnpress);
}
