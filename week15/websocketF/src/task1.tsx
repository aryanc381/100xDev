import { useEffect, useRef, useState } from "react"

export function Task1() {
    //@ts-ignore
    const inputRef = useRef();
    const [socket, setSocket] = useState();
    
    function sendHelper() {
        //@ts-ignore
        const message = inputRef.current.value;
        //@ts-ignore
        socket.send(message);
    }
    
    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8080');
        //@ts-ignore
        setSocket(ws);
        ws.onmessage = (e) => {
            alert(e.data);
        }
    }, []);
    return(
        <>
            {/* @ts-ignore */}
            <input ref={inputRef} type="text" className="text" placeholder="Send Message..."/>
            <button onClick={sendHelper}>Send</button> 
        </>
    )
}