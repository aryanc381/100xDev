import { WebSocketServer } from"ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (socket) => { // on making connection do this.

    // 1. Sending data to user.
    console.log('user connected.'); // to show that the user is connected.
    setInterval(() => {
        socket.send(`Current profit of aryan's company is ${Math.random()}`);
    }, 2000); // to send the information from server to client every 0.5s

    // 2. Receiving data from user
    socket.on("message", (e) => {
        console.log(e.toString());
    });
});