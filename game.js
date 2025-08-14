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
console.log(randbtn);
console.log(randIdx);
console.log(randcolor);
     btnflash(randbtn);
}
 function btnflash(box){
    box.classList.add("flash");
  setTimeout(function(){
box.classList.remove("flash");
  },250

);
}
 