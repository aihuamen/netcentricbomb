// NOTE create the game board return array index 0-35 if bomb 1 no bomb 0
const createBoard = () => {
  const board = Array(36).fill(0);

  var arr = [];
  while (arr.length < 11) {
    var r = Math.floor(Math.random() * 36);
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  for (i = 0; i < 11; i++) {
    board[arr[i]] = 1;
  }
  console.log(arr);
  return board;
};

const calculateScore = (board, input) => {
  return (board[input] = 1);
};

module.exports = { createBoard, calculateScore };
