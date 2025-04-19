
import { useEffect } from 'react';
import './App.css'
import { io } from 'socket.io-client'


const socket = io("http://localhost:8000");



function App() {

  useEffect(()=>{
    socket.on("toclient",(data)=>{
      console.log(data)

      io.emit("toclient","Hello Client")
    },[])
  })
  function sendMessage(){
    socket.emit("message","Hello")
  }
  return (
    <>
      <h1>Welcome</h1>
      <button onClick={sendMessage}>Send Message</button>
    </>
  )
}

export default App
