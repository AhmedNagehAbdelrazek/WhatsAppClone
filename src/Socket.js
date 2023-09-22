import io from 'socket.io-client';
import { BASE_URL } from './config';


let socket;

const connectSocket = (user_id) =>{
    socket = io(BASE_URL,{
        query: {
            user_id
        },
        autoConnect:true,
        reconnection:true,
        reconnectionDelay: 1000,
        reconnectionDelayMax : 10000,
        reconnectionAttempts: 10,
        retries: Infinity,
        
    });
    console.log("socket connected",socket.connected);
}
const clearSocket = () =>{
    if(socket) socket.close();
    if(socket) socket.disconnect();
    socket = null;
}

export {socket,connectSocket,clearSocket};