import "./App.css"
import io from "socket.io-client"
import { useEffect, useState } from "react"
import Header from "./components/Header"
import HorseList from "./components/HorseList"

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    const socket = io.connect("http://localhost:3002")
    socket.on("connect", () => console.log(socket.connected))
    socket.emit("start")
    socket.on("ticker", (round) => {
      // console.log(round)
      setData(round)
    })
    return () => {
      socket.disconnect()
    }
  }, [])
  return (
    <div className="App">
      <Header />
      <HorseList data={data} />
    </div>
  )
}

export default App
