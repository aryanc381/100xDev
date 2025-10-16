import { useState, useRef, useEffect } from "react";

export function Basic() {
  const [socket, setSocket] = useState();
  //@ts-ignore
  const inputRef = useRef();
  
  function sendMessage() {
    if(!socket) {
      return;
    }
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
  }, [])
  return (
    <>
      {/* @ts-ignore */}
      <input ref={inputRef} type="text" className="text" placeholder='Message...' />
      <button onClick={sendMessage}>Send</button>
    </>
  )
}