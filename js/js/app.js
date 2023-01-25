'use strict'

const MINE = 'MINE'
const FLAG = 'FLAG'
const MINE_IMG = '💥'
const FLAG_IMG = '🚩'

var gBoard
var gLevelBeginner = {
    SIZE: 4,
    MINES: 2

}
var gLevelMedium = {
    SIZE: 8,
    MINES: 14

}
var gLevelExpert = {
    SIZE: 12,
    MINES: 32

}

// var gCell = {
//     minesAroundCount: 4,
//     isShown: false,
//     isMine: false,
//     isMarked: true
// }


// gGame = {
//     isOn: false,
//     shownCount: 0,
//     markedCount: 0,
//     secsPassed: 0
// }

function onInit() {
    gBoard = buildBoard(gLevelBeginner.SIZE, gLevelBeginner.MINES)

    renderBoard(gBoard)
    console.table(gBoard)

}

function buildBoard(SIZE, MINES) {

    var board = []
    for (var i = 0; i < SIZE; i++) {
        board[i] = []
        for (var j = 0; j < SIZE; j++) {
            board[i][j] = {
                minesAroundCount: 0,
                isShown: false,
                isMine: false,
                isMarked: false
            }
        }
    }

    return board
}
function renderBoard(board) {
    var strHTML = ''

    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < board[0].length; j++) {
            var currCell = board[i][j]
            var className = (currCell) ? 'occupied' : ''
            strHTML += `<td class="${className}"
                data-i="${i}" data-j="${j}"
                onclick="onCellClicked(this,${i},${j})">${currCell}</td>`
        }
        strHTML += '</tr>'
    }
    // console.log(strHTML)
    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
}


    // function onToggleGame(elBtn) {

    //     elBtn.innerText = (gIsOn) ? 'start' : 'restart'

    //     gIsOn = !gIsOn
    // }



    // function createMines() {
    //     var mines = []
    //     for (var i = 0; i < gMinersNum; i++) {
    //         mines.push(createMine(i))
    //     }
    //     return mines
    // }

    // function createMine(idx) {
    //      MINE = {
    //         id: idx + 1,

    //     }
    //     return MINE
    // }



















