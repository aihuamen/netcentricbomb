const io = require("socket.io")();
const port = 8000;
const { createBoard, calculateScore } = require("../src/utils/game");
const {
  addUser,
  removeUser,
  getScore,
  updateScore,
  resetAll,
  resetScore
} = require("../src/utils/users");
let bStatus = 1;
let board = createBoard();
let playerNumber = 0;
let chatRecord = [];

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

  socket.on("getScore", (userName1, userName2) => {
    const score = getScore(userName1, userName2);
    // socket.emit("")
  });

  socket.on("updateChat", () => {
    socket.emit("onChat", chatRecord);
  });

  socket.on("updateRoundPls", () => {
    setInterval(() => {
      socket.emit("updateRoundLaew", bStatus);
    }, 1);
  });

  socket.on("subscribeToTimer", interval => {
    console.log("client is subscribing to timer with interval ", interval);
    setInterval(() => {
      socket.emit("timer", "Current date: " + new Date());
    }, interval);
  });

  socket.on("resetBoard", () => {
    console.log("reset board");
    board = createBoard();
    resetAll();
    bStatus++;
    io.emit("newBoard", bStatus);
  });

  // NOTE When user send chat
  socket.on("sendChat", word => {
    chatRecord.push(word);
    io.emit("onChat", chatRecord);
  });

  socket.on("sendUsername", name => {
    console.log("Welcome " + name + "!");
    addUser(name);
    socket.emit("setUsername", [name, true]);
  });

  socket.on("chooseBox", pos => {
    console.log("The box " + pos[0] + " is chosen by " + pos[1]);
    io.emit("responseBox", [pos[0], board[pos[0]], pos[1]]);
  });

  socket.on("scoreUpdate", userName => {
    updateScore(userName);
  });

  socket.on("disconnect", () => {
    playerNumber = playerNumber - 1;
    console.log("Player disconnected");
    console.log("Current player Online :", playerNumber);
    socket.emit("playerNumber", playerNumber);
  });
});
