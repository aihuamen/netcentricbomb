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

function resetAllUser() {
  alert("...Reset Server...");
  socket.emit("removeAllUser");
}

socket.on("playerNumber", number => {
  console.log("FROM ADMIN");
  console.log(number);
  document.getElementById("player").innerHTML =
    "Current player online : " + number;
});
