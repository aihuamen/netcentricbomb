import openSocket from 'socket.io-client';
import { string } from 'prop-types';
const socket = openSocket('http://localhost:8000');

const subscribeToTimer = (callback:any) => {
    socket.on('timer', (timestamp:string) => callback(null, timestamp));
    //socket.on('message', ... => callback(null,...))
    //socket.on('checkBox', ...) this is a bomb or not
    socket.emit('subscribeToTimer', 1000);
    //socket.emit('sentMessage', ...) 
    //socket.emit('chooseBox', ...) this is a chosen position of box
}

const resetBoard = (callback:any) => {
    socket.on('boardStatus', (bstatus:number) => callback(null, bstatus));
    socket.emit('resetBoard');
}

const chooseBox = (callback:any) => {
    socket.on('checkBox', (wow:boolean) => callback(null, wow));
    socket.emit('chooseBox');
}

export {subscribeToTimer}
export {resetBoard}
export {chooseBox}
