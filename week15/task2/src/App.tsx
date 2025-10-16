import { useEffect, useRef, useState } from 'react';
import './App.css'

function App() {
  const [messages, setMess] = useState(['hi there', 'hello']);
  const [inputVal, setInput] = useState('');
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.onmessage = (event) => {
      setMess(m => [...m, event.data]);
    };

    ws.onopen = () => {
      ws.send(JSON.stringify({
        type: "join",
        payload: { roomId: "red" } // this matches the server now
      }));
    };

    wsRef.current = ws;

    return () => ws.close();
  }, []);

  return (
    <div className='h-screen bg-black'>
      <div className="h-[50vh] overflow-y-auto">
        {messages.map((message, idx) => 
          <div key={idx} className='mb-2'>
            <span className='bg-white text-black m-2 p-2 rounded-md'>
              {message}
            </span>
          </div>
        )}
      </div>

      <div>
        <input 
          value={inputVal} 
          onChange={(e) => setInput(e.target.value)} 
          type="text" 
          className="w-[50vw] p-4 m-4 bg-white text-black border-[0.1vw] rounded-xl" 
          placeholder='Enter Message' 
        />
        <button onClick={() => {
          wsRef.current?.send(JSON.stringify({
            type: "chat",
            payload: { message: inputVal }
          }));
          setInput('');
        }} className='p-4 bg-white text-black border-[0.1vw] rounded-xl'>
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
