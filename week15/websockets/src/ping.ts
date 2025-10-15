import { WebSocketServer } from "ws";

const ws = new WebSocketServer({ port: 8080 });

ws.on('connection', (socket) => {
    console.log('user connected.');
    socket.on('message', (e) => {
        let ping: string = e.toString();
        if(ping === "ping") {
            socket.send('pong');
        } else {
            socket.send(e.toString());
        }
        
    });
});