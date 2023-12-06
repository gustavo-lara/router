import { Outlet } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"

const App = () => {
  return (
    <>
    <h1>Nav</h1>
    <Header/>
    <Outlet/>
    <h1>Footer</h1>
    </>
  )
}

export default App
