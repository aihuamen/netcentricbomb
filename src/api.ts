import openSocket from "socket.io-client";
import { User } from "./components/App";
const socket = openSocket("http://192.168.1.30:3000");

type Callback<T = any> = (err: any, result: T) => void;

export const subscribeToTimer = (callback: Callback<string>) => {
  socket.on("timer", (timestamp: string) => callback(null, timestamp));
  socket.emit("subscribeToTimer", 1000);
};

export const emitCountDown = (name: string, winner: string) => {
  socket.emit("setCountDown", [name, winner]);
};

export const playerReady = (name: string) => {
  socket.emit("playerReady", name);
};

export const onPlayable = (callback: Callback<string>) => {
  socket.on("setPlayable", (playable: string) => callback(null, playable));
};

export const onCountDown = (callback: Callback<number>) => {
  socket.on("startCountDown", (start: number) => callback(null, start));
};

export const updatePlayer = () => {
  socket.emit("updatePlayer");
};

export const updateChat = () => {
  socket.emit("updateChat");
};

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
  socket.emit("sendUsername", name);
};

export const onUsername = (callback: Callback<Array<any>>) => {
  socket.on("setUsername", (name: Array<any>) => callback(null, name));
};

export const onChat = (callback: Callback<string[]>) => {
  socket.on("onChat", (record: string[]) => callback(null, record));
};

export const chooseBox = (pos: number, name: string) => {
  socket.emit("chooseBox", [pos, name]);
};

export const onBox = (callback: Callback<Array<any>>) => {
  socket.on("responseBox", (res: Array<any>) => callback(null, res));
};

export const playerNumber = (callback: Callback<number>) => {
  socket.on("playerNumber", (playerNumber: number) =>
    callback(null, playerNumber)
  );
};

export const scoreUpdate = (userName: string) => {
  socket.emit("scoreUpdate", userName);
};

export const getScore = () => {
  socket.emit("getScore");
};

export const onScore = (callback: Callback<User[]>) => {
  socket.on("onScore", (score: User[]) => callback(null, score));
};

export const gameStart = (callback: Callback<string>) => {
  socket.on("gameStart", (foo: string) => callback(null, foo));
};

export const onWinner = (callback: Callback<string>) => {
  socket.on("declareWinner", (winner: string) => callback(null, winner));
};
