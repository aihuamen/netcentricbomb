const io = require("socket.io")();
const port = 8000;

io.listen(port);
console.log("listening on port ", port);

io.on("connection", socket => {
  console.log("Connected");

  socket.on("subscribeToTimer", interval => {
    console.log("client is subscribing to timer with interval ", interval);
    setInterval(() => {
      socket.emit("timer", "from server: " + new Date());
    }, interval);
  });
});
