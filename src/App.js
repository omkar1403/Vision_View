
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './style.css'
import { Children } from "react"
import MovieCard from './compo/MovieCard'
import Maincontent from "./compo/MainContent"
import LaptopForm from "./compo/Laptop"
import Houseprice from "./compo/House"
import MobileForm from "./compo/Phone"
import BudgetCalculator from "./compo/Budget"
import Login from "./compo/login"
import About from "./compo/Aboutus"
import Howuse from "./compo/Howuse"


// import FlavorForm from './compo/carform'
//import 
import FlavorForm from './compo/carform'


import Navbar from "./compo/Navbar"

function App() {
  return (
    // <div>
    //     <Navbar />
    //     <Maincontent />

    // </div>

    < BrowserRouter >
      <Navbar />
      <Routes>
        <Route path="/" element={<Maincontent />}>
          {/* <Route index element={<MainContent />} /> */}
          <Route path="/houses" element={<Houseprice />} />
          <Route path="/mobile" element={<MobileForm />} />
          <Route path="/ff" element={<FlavorForm />} />
          <Route path="/usee" element={<Howuse />} />

          <Route path="/xy" element={<LaptopForm />} />
          <Route path="/budget" element={<BudgetCalculator />} />
          <Route path="/login1" element={<Login />} />
          <Route path="/about" element={<About />} />



        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App;
// ReactDOM.render(<App />, document.getElementById("root"))
