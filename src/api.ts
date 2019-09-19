import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

const subscribeToTimer = (callback:any) => {
    socket.on('timer', (timestamp:string) => callback(null, timestamp));
    //socket.on('message', ... => callback(null,...))
    socket.emit('subscribeToTimer', 1000);
    //socket.emit('sentMessage', ...) 
}

const resetBoard = (callback:any) => {
    socket.on('newBoard', (bStatus:number) => callback(null, bStatus));
    socket.emit('resetBoard');
}

const chooseBox = (pos:number,callback:any) => {
    socket.emit("chooseBox",pos)
    socket.on("checkBox",(real: number) => callback(null,real))
}

export {subscribeToTimer}
export {resetBoard}
export {chooseBox}
