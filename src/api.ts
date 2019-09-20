import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:8000");

type Callback<T = any> = (err: any, result: T) => void;

export const subscribeToTimer = (callback: Callback) => {
  socket.on("timer", (timestamp: string) => callback(null, timestamp));
  //socket.on('message', ... => callback(null,...))
  socket.emit("subscribeToTimer", 1000);
  //socket.emit('sentMessage', ...)
};

export const updatePlayer = () => {
  socket.emit("updatePlayer");
}

export const emitUpdateRound = () => {
  socket.emit("updateRoundPls");
}

export const onUpdateRound = (callback: Callback<number>) => {
  socket.on("updateRoundLaew", (bStatus: number) => callback(null, bStatus));
}

export const onResetBoard = (callback: Callback<number>) => {
  socket.on("newBoard", (bStatus: number) => callback(null, bStatus));
};

export const emitResetBoard = () => {
  socket.emit("resetBoard");
};

export const chooseBox = (pos: number, callback: any) => {
  socket.emit("chooseBox", pos, (result: number) => callback(result));
};

export const playerNumber = (callback:Callback<number>) => {
  socket.on("playerNumber", (playerNumber: number) => callback(null, playerNumber));
};
