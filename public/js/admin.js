const socket = io();

socket.on("server", text => {
  var para = document.createElement("P");
  para.innerHTML = text;
  document.getElementById("history").prepend(para);
});

function resetScore() {
  alert("Score had been reset");
  socket.emit("resetBoard");
}
