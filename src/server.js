const io = require("socket.io")();
const port = 8000;

io.listen(port);
console.log("listening on port ", port);

io.on("connection", client => {
  console.log("Connected");

  client.on("subscribeToTimer", interval => {
    console.log("client is subscribing to timer with interval ", interval);
    setInterval(() => {
      client.emit("timer", "Yeet from server: " + new Date());
    }, interval);
  });
});
