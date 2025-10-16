import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

let userCount: number = 1;
let allSockets: WebSocket[] = [];

wss.on('connection', (socket) => { // socket -> ref var used to send, receive to the connected user kinda like (req, res)
    allSockets.push(socket);
    console.log('user connected #' + userCount);
    userCount += 1;
    

    socket.on('message', (message) => { // event handler to do computation when message is received by the server from the client
        console.log('message received: ' + message.toString());
        for(let i = 0; i < allSockets.length; i++) {
            const unique_socket = allSockets[i]!;
            unique_socket.send(message.toString() + ": sent from the websocket 1");
        }
    });

    socket.on('disconnect', () => {
        allSockets = allSockets.filter(x => x != socket);
    });
});