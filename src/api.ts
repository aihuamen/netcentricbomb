import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:8000");

type Callback<T = any> = (err: any, result: T) => void;

export const subscribeToTimer = (callback: Callback<string>) => {
  socket.on("timer", (timestamp: string) => callback(null, timestamp));
  //socket.on('message', ... => callback(null,...))
  socket.emit("subscribeToTimer", 1000);
  //socket.emit('sentMessage', ...)
};

export const updatePlayer = () => {
  socket.emit("updatePlayer");
};

export const updateChat = () => {
  socket.emit("updateChat");
}

export const emitUpdateRound = () => {
  socket.emit("updateRoundPls");
};

export const onUpdateRound = (callback: Callback<number>) => {
  socket.on("updateRoundLaew", (bStatus: number) => callback(null, bStatus));
};

export const onResetBoard = (callback: Callback<number>) => {
  socket.on("newBoard", (bStatus: number) => callback(null, bStatus));
};

export const emitResetBoard = () => {
  socket.emit("resetBoard");
};

export const emitChat = (word: string) => {
  socket.emit("sendChat", word);
};

export const emitUsername = (name: string) => {
  socket.emit("sendUsername",name);
};

export const onUsername = (callback: Callback<Array<any>>) => {
  socket.on("setUsername", (name: Array<any>) => callback(null,name));
}

export const onChat = (callback: Callback<string[]>) => {
  socket.on("onChat", (record: string[]) => callback(null, record));
}

export const chooseBox = (pos: number) => {
  socket.emit("chooseBox", pos);
};

export const onBox = (callback: Callback<number[]>) => {
  socket.on("responseBox",(res: number[]) => callback(null,res))
}

export const playerNumber = (callback: Callback<number>) => {
  socket.on("playerNumber", (playerNumber: number) => callback(null, playerNumber));
};

export const scoreUpdate = () => {
  socket.emit("scoreUpdate");
};
