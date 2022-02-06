
let gameover = false;
let box = document.getElementsByClassName("ele");

let now = 'X';
function changeTurn() {
    console.log("changing turn");
    if (now === 'X') {
        now = 'O';
    }
    else if (now === 'O') {
        now = 'X';
    }
    document.getElementById("change").innerText = now;
}

function restart() {
    // window.location.reload();

    Array.from(box).forEach(element => {
        element.innerHTML = '';
        console.log("element cleared");
    });
    console.log("gameover = " + gameover);
    document.getElementById("gameover").style.display = "none";

}

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(e => {
    let boxtext = e.querySelector('.ele');

    e.addEventListener('click', function () {
        console.log("in for each");
        if (boxtext.innerHTML === '') {
            console.log("checking if the box text is empty");
            boxtext.innerHTML = now;
            checkWin();
            if (gameover) {
                document.getElementById("gameovertext").innerText = now + " Won the Game";
                incrementscore();
                gameover = false;
            }
            else
                changeTurn();

        }
    })
});
let tries=0;
function incrementscore() {
    console.log("score incremented");
    if (now === 'O') {
        document.getElementById("Oscore").innerText++;
    }
    else {
        document.getElementById("Xscore").innerText++;
    }
}



function checkWin() {
    let boxtext = document.getElementsByClassName("ele");
    console.log("check win called");
    let array = [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [6, 4, 2],
        [0, 4, 8]
    ];
    array.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (
                (boxtext[e[0]].innerText !== ''))) {
            console.log("winner checked");
            gameover = true;
            if (gameover) {
                tries=-1;
            }
            document.getElementById("gameover").style.display = "flex";
        }
        console.log("gameover = " + gameover);

    })
    tries++;
    console.log("val of c = "+tries);

    if (!gameover && tries===9) {
        console.log("c==9");
        document.getElementById("gameover").style.display = "flex";
        document.getElementById("gameovertext").innerText = "Game Drawn";
        tries=0;
    }

}