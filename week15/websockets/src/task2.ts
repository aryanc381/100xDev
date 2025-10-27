import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User {
    socket: WebSocket,
    room: string
}

let allSockets: User[] = [];
let parsedMessage: any;
wss.on('connection', (socket) => {
    socket.on('message', (message) => {
        //@ts-ignore 
        //@ts-ignore
        parsedMessage = JSON.parse(message);
        console.log(parsedMessage);
        if(parsedMessage.type == "join") {
            console.log('join socket has been called.')
            allSockets.push({
                //@ts-ignore
                socket,
                room: parsedMessage.payload.roomId
            });
            console.log('socket has been added to room');
        }
        if(parsedMessage.type == "chat") {
            console.log('chat socket has been called.')
            //@ts-ignore
            const currentUserRoom = allSockets.find((x) => x.socket == socket).room; 
            for(let i = 0; i < allSockets.length; i++) {
                //@ts-ignore
                if(allSockets[i].room == currentUserRoom) {
                    //@ts-ignore
                    allSockets[i].socket.send(parsedMessage.payload.message);
                    console.log('socket is sending message to ' + allSockets[i]);
                }
            }
            console.log('Sockets sent message to all sockets');
        }

    });

    socket.on('close', () => {
        //@ts-ignore
        allSockets = allSockets.filter(x => x != socket);
    })
})