var d = document;
var grid = new Array();
var player = 0;
var info;
var xwins = 0, owins = 0, draws = 0;
function initialize() {
    var i, j;
    info = d.getElementById("info");
    info.innerHTML = "Current Chance : <b>X</b> <br />" +
                     "<b>ScoreBoard:</b><br />" +
                     "X Won : " + xwins + "<br />" +
                     "O Won : " + owins + "<br />" +
                     "Draws  : " + draws;
    for(i = 1; i <= 3; i++) {
        grid[i-1] = new Array();
        for(j = 1; j <= 3; j++) {
            var s = "cell" + i + j;
            grid[i-1][j-1] = (d.getElementById(s));
        }
    }
    for(i = 0; i < 3; i++) {
        for(j = 0; j < 3; j++) {
            grid[i][j].innerHTML = i + ", " + j;
        }
    }
}
function chance(e) {
    if(e.innerHTML == "X" || e.innerHTML == "O") {
        alert("Move not allowed!");
        return;
    }
    else if(player == 0) {
        e.innerHTML = "X";
        info.innerHTML = "Current Chance : <b>X</b> <br />" +
                         "<b>ScoreBoard:</b><br />" +
                         "X Won : " + xwins + "<br />" +
                         "O Won : " + owins + "<br />" +
                         "Draws  : " + draws;
    } else {
        e.innerHTML = "O";
        info.innerHTML = "Current Chance : <b>X</b> <br />" +
                         "<b>ScoreBoard:</b><br />" +
                         "X Won : " + xwins + "<br />" +
                         "O Won : " + owins + "<br />" +
                         "Draws  : " + draws;
    }
    player = 1 - player;
    var win = checkGameOver();
    if(win != undefined) {
        alert("Game Over\n" + win + " wins!!!")
        if(win == "X")xwins++;
        else owins++;
        resetGame();
    }
    else if(checkDraw()) {
        alert("Game Over\nIt's a draw.")
        draws++;
        resetGame();
    }
}
function checkGameOver() {
    var winner = undefined;
    var i, j;
    var over;
    //horizontal X
    for(i = 0; i < 3; i++) {
        over = true;
        for(j = 0; j < 3; j++) {
            over = over && grid[i][j].innerHTML == "X";
        }
        if(over) {
            return "X";
        }
    }
    //vertical X
    for(i = 0; i < 3; i++) {
        over = true;
        for(j = 0; j < 3; j++) {
            over = over && grid[j][i].innerHTML == "X";
        }
        if(over) {
            return "X";
        }
    }
    //diagonal X
    over = true;
    for(i = 0; i < 3; i++) {
        over = over && grid[i][i].innerHTML == "X";
    }
    if(over) {
        return "X";
    }
    over = true;
    for(i = 0; i < 3; i++) {
        over = over && grid[i][2-i].innerHTML == "X";
    }
    if(over) {
        return "X";
    }
    //horizontal O
    for(i = 0; i < 3; i++) {
        over = true;
        for(j = 0; j < 3; j++) {
            over = over && grid[i][j].innerHTML == "O";
        }
        if(over) {
            return "O";
        }
    }
    //vertical O
    for(i = 0; i < 3; i++) {
        over = true;
        for(j = 0; j < 3; j++) {
            over = over && grid[j][i].innerHTML == "O";
        }
        if(over) {
            return "O";
        }
    }
    //diagonal O
    over = true;
    for(i = 0; i < 3; i++) {
        over = over && grid[i][i].innerHTML == "O";
    }
    if(over) {
        return "O";
    }
    over = true;
    for(i = 0; i < 3; i++) {
        over = over && grid[i][2-i].innerHTML == "O";
    }
    if(over) {
        return "O";
    }
}
function checkDraw() {
    var i, j;
    for(i = 0; i < 3; i++) {
        for(j = 0; j < 3; j++) {
            if(grid[i][j].innerHTML != "X" && grid[i][j].innerHTML != "O")
                return false;
        }
    }
    return true;
}
function resetGame() {
    for(i = 0; i < 3; i++) {
        for(j = 0; j < 3; j++) {
            grid[i][j].innerHTML = i + ", " + j;
        }
    }
    player = 0;
    info.innerHTML = "Current Chance : <b>X</b> <br />" +
                     "<b>ScoreBoard:</b><br />" +
                     "X Won : " + xwins + "<br />" +
                     "O Won : " + owins + "<br />" +
                     "Draws : " + draws; 
}
