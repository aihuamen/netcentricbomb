const io = require("socket.io")();
const port = 8000;
const { createBoard, calculateScore } = require("../src/utils/game");
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

  socket.on("updateChat", () => {
    socket.emit("onChat",chatRecord);
  })

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
    bStatus++;
    io.emit("newBoard", bStatus);
  });

  // NOTE When user send chat
  socket.on("sendChat", (word) => {
    console.log(word + " is sent by someone");
    chatRecord.push(word)
    io.emit("onChat",chatRecord);
  });

  socket.on("sendUsername", (name) => {
    console.log("Welcome " + name + "!")
    socket.emit("setUsername",[name,true]);
  })

  // NOTE When user select box
  socket.on("chooseBox", (pos) => {
    console.log("The box " + pos[0] + " is chosen by " + pos[1]);
    io.emit("responseBox",[pos[0],board[pos[0]]])
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
