import "./App.css"
import io from "socket.io-client"
import { useEffect } from "react"
import Header from "./components/Header"
import HorseList from "./components/HorseList"
import { useDispatch } from "react-redux"
import { addTodo } from "./store/todoSlice"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const socket = io.connect("http://localhost:3002")
    socket.on("connect", () => console.log(socket.connected))
    socket.emit("start")
    socket.on("ticker", (round) => {
      dispatch(addTodo(round))
    })
    return () => {
      socket.disconnect()
    }
  }, [])
  return (
    <div className="App">
      <Header />
      <HorseList />
    </div>
  )
}

export default App
