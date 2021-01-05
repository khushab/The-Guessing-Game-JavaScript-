let guessNum = document.getElementById('guess__number');
let submit = document.getElementById('submit__number');
let restart = document.getElementById('restart__game');
let result = document.getElementById('result');
let history = document.getElementById('history');
let arr = [];

let randNo = Math.ceil(Math.random() * 100) + 1;
// console.log(randNo);


window.onload = function () {
    submit.addEventListener('click', submitNum);
    restart.addEventListener('click', restartGame);
}


function restartGame(e) {
    arr = [];
    history.innerHTML = "";
    result.innerHTML = "";
    guessNum.value = "";
    count = 1;
    randNo = Math.floor(Math.random() * 100) - 1;
}

let count = 1;

function submitNum(e) {
    let val = guessNum.value;
    if (val > randNo) {
        guessLower(val);
        saveGuess(val);
        count = count + 1;
    }
    else if (val < randNo) {
        guessHigher(val);
        saveGuess(val);
        count = count + 1;
    }
    else {
        correctGuess(count, val);
        saveGuess(val);
    }
}

function guessLower(val) {
    result.innerHTML = "<div class='yellow'> You guessed it too high!</div>";
    // let element = document.createElement('div');
    // element.className = 'red';
    // element.innerText = `You guesses ${val}`;
    // history.appendChild(element);
}

function guessHigher(val) {
    result.innerHTML = "<div class='yellow'> You guessed it too Low!</div>"
    // let element = document.createElement('div');
    // element.className = 'red';
    // element.innerText = `You guesses ${val}`;
    // history.appendChild(element);
}

function correctGuess(count, val) {
    result.innerHTML = `<div class='green'> Congratulations!! You guessed it correct in ${count} guesses!</div>`;
    // let element = document.createElement('div');
    // element.className = 'red';
    // element.innerText = `You guesses ${val}`;
    // history.appendChild(element);
}

function saveGuess(val) {
    arr.push(val);
    let index = arr.length - 1;
    list = "<ul >"
    while (index >= 0) {
        list += `<li class='red'> You guessed ${arr[index]}</li>`;
        index -= 1;
    }
    list = list + "</ul>"
    history.innerHTML = list;
}






