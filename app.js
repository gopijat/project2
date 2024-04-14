let gameSeq = [];
let userSeq = [];
let btns = ["box1", "box2", "box3", "box4"];
let h3 = document.querySelector("h3");

let started = false;

let level = 0;

document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    console.log("game started");
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("gameFlash");
  setTimeout(function () {
    btn.classList.remove("gameFlash");
  }, 100);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 100);
}

function levelUp() {
  userSeq = [];
  level++;
  h3.innerText = `Level ${level}`;
  let randomColor = btns[Math.floor(Math.random() * btns.length)];
  let randomBtn = document.querySelector(`.${randomColor}`);
  gameFlash(randomBtn);
  gameSeq.push(randomColor);
  console.log(gameSeq);
}
function checkAns() {
  let idx = userSeq.length - 1;
  if (gameSeq[idx] === userSeq[idx]) {
    if (userSeq.length === level) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h3.innerHTML = `GAME OVER!! Your score was <b>${
      level - 1
    }</b> <br>Press any key to ReStart`;
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".color");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
