/*
@title: RPS
@author: Shahm Najeeb
@tags: ['endless']
@addedOn: 2024-08-23
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

*/

const player = "p";
const rock = "r";
const paper = "f";
const scissors = "c";
const opponent = "o"; // Opponent could be another player or AI


setLegend(
  [player, bitmap`
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222`],
  [rock, bitmap`
................
................
................
................
................
................
................
......LL1.......
.....LLLLL......
....LL1LLL1.....
....1LLLLL......
.....LLL1.......
................
................
................
................`],
  [scissors, bitmap`
................
................
................
................
................
......L.L.......
.....L.L.L......
......LLL.......
......1L1.......
.......1........
......1.1.......
......1.1.......
................
................
................
................`],
  [paper, bitmap`
................
................
......6.........
.....6FFF.......
....6F222F......
.....F222F......
.....F222FF.....
.....FF222F.....
......F222F.....
......F222F6....
.......FFF6.....
.........6......
................
................
................
................`]
)

setSolids([])

let level = 0
const levels = [
  map`
rfc`
]

setMap(levels[level])

function determineWinner(playerMove, opponentMove) {
  if (playerMove === opponentMove) return "draw";
  if ((playerMove === rock && opponentMove === scissors) ||
    (playerMove === paper && opponentMove === rock) ||
    (playerMove === scissors && opponentMove === paper)) {
    return "player wins";
  } else {
    return "opponent wins";
  }
}

onInput("a", () => {
  playerMove = "r";
})
onInput("s", () => {
  playerMove = "p";
})
onInput("d", () => {
  playerMove = "s";
})

afterInput(() => {
  clearText();
  const opponentMoves = [rock, paper, scissors];
  const opponentMove = opponentMoves[Math.floor(Math.random() * opponentMoves.length)];
  const result = determineWinner(playerMove, opponentMove);
  addText(result, { x: 0, y: 0 });
})

