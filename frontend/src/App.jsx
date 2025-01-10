import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Info from "./pages/info";
import Home from "./pages/Home"
import './index.css'; // Adjust the path based on your setup



const App =()=>{
  return (
    <>
      <div>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path ="/info" element={<Info/>}/>
      </Routes>
     </Router>
    </div>
    </>
  )
}

export default App