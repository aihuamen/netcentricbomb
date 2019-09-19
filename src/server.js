const io = require("socket.io")();
const port = 8000;
const { createBoard, calculateScore } = require("../src/utils/game");

io.listen(port);
console.log("listening on port ", port);

io.on("connection", socket => {
  console.log("Connected");

  const board = createBoard();

  socket.on("subscribeToTimer", interval => {
    console.log("client is subscribing to timer with interval ", interval);
    setInterval(() => {
      socket.emit("timer", "from server: " + new Date());
    }, interval);
  });

  socket.on("resetBoard", () => {
    board = createBoard();
  });
});
