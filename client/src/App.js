import "./App.css"
import io from "socket.io-client"
import { useEffect } from "react"

function App() {
  const socket = io.connect("http://localhost:3002")
  socket.on("connect", () => console.log(socket.connected))
  socket.emit("start")
  useEffect(() => {
    socket.on("ticker", (round) => {
      console.log(round)
    })
  }, [socket])
  return <div className="App"></div>
}

export default App
