const io = require("socket.io")();
const port = 8000;
const { createBoard, calculateScore } = require("../src/utils/game");
let bStatus = 1;
let board = createBoard();
let playerNumber = 0;

io.listen(port);
console.log("listening on port ", port);

io.on("connection", socket => {
  // NOTE Counting the number of current player online
  playerNumber = playerNumber + 1;
  console.log("Current player Online  : ", playerNumber);

  socket.on("updatePlayer", () => {
    console.log("Here comes a new challenger");
    setInterval(() => {
      socket.emit("playerNumber", playerNumber);
    }, 1);
  });

  socket.on("updateRoundPls", () => {
    setInterval(() => {
      socket.emit("updateRoundLaew", bStatus);
    }, 1);
  });

  socket.on("subscribeToTimer", interval => {
    console.log("client is subscribing to timer with interval ", interval);
    setInterval(() => {
      socket.emit("timer", "from server: " + new Date());
    }, interval);
  });

  socket.on("resetBoard", () => {
    console.log("reset board");
    board = createBoard();
    bStatus++;
    io.emit("newBoard", bStatus);
  });

  // NOTE When user select box
  socket.on("chooseBox", (pos, cb) => {
    console.log("The box " + pos + " is chosen");
    cb(board[pos]);
  });

  socket.on("scoreUpdate", () => {
    console.log("Score!!");
    // TODO Adding score in by user
  });

  // NOTE When user disconnected
  socket.on("disconnect", () => {
    playerNumber = playerNumber - 1;
    console.log("Player disconnected");
    console.log("Current player Online :", playerNumber);
    socket.emit("playerNumber", playerNumber);
  });
});
