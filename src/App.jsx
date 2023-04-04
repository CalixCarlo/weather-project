import React from 'react'
import { Routes, Route } from "react-router-dom"
import routes from "./routes"
import NavBar from './componenets/Navbar'

function App() {


  return (
    <>
    <NavBar></NavBar>
    <Routes>
        {routes.map((route, index) => {
          return <Route key={index} path={route.path} element={route.element} exact />
        })}
      </Routes>
   
    </>
  )
}



export default App
