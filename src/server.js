const io = require("socket.io")();
const port = 8000;
const { createBoard, calculateScore } = require("../src/utils/game");
let bStatus = 1;
let board = createBoard();
var playerNumber = 0;

io.listen(port);
console.log("listening on port ", port);

io.on("connection", socket => {
  playerNumber = playerNumber + 1;
  console.log("Current player Online  : ", playerNumber);
  socket.emit("playerNumber", playerNumber);

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
    socket.emit("newBoard", bStatus);
  });

  socket.on("chooseBox", pos => {
    console.log("The box " + pos + " is chosen");
    socket.emit("checkBox", board[pos]);
  });

  socket.on("disconnect", () => {
    playerNumber = playerNumber - 1;
    console.log("Player disconnected");
    console.log("Current player Online :", playerNumber);
    socket.emit("playerNumber", playerNumber);
  });
});
