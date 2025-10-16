import { useEffect, useState } from "react";

export function Task2() {
    const [type, setType] = useState('');
    const [what, setWhat] = useState('');
    const [id, setId] = useState('');
    const [mess, setMess] = useState('');
    const [socket, setSocket] = useState<WebSocket | null>(null);
    let final: string;

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8080');
        //@ts-ignore
        setSocket(ws);
        ws.onmessage = (e) => {
            alert(e.data);
        }
    }, []);

    function sendHelper() {
        
        if(!socket) { return; }
        if(type === "join") {
            final = JSON.stringify({
                "type": `${type}`,
                "payload" : { "roomId" : `${id}` }
            })
            console.log(final)
            //@ts-ignore
            socket.send(final);
        } if (type === "chat") {
            console.log(mess);
            final = JSON.stringify({
                "type": `${type}`,
                "payload" : { "message" : "mess" }
            });
            console.log(final)
            //@ts-ignore
            socket.send(final);
        } 
        
        
    }
    return(
        <>
            <input value={type} onChange={(e) => {setType(e.target.value)}} type="text" className="text" placeholder="Enter Type..." />
            <input type="text" onChange={(e) => {setMess(e.target.value)}} value={mess} placeholder="Message..." />
            <input value={id} onChange={(e) => {setId(e.target.value)}} type="text" className="text" placeholder="Room ID..." />
            <button onClick={sendHelper}>Send</button>
        </>
    )
}