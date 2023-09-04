import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import './style.css'
import { Children } from "react"
import MovieCard from './compo/MovieCard'
import MainContent from './compo/MainContent'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// function Maincontent() {

//     return (
//         <main>

//             <div className="search">
//                 <input type="text"
//                     placeholder="Search here"

//                 />
//             </div>
//             <form action="/tacos">
//                 <button class="post">
//                     Car
//                 </button>
//             </form>
//             <form action="/tacos">
//                 <button class="post">
//                     House
//                 </button>
//             </form>
//             <form action="/tacos">
//                 <button class="post">
//                     Laptop
//                 </button>
//             </form>
//             <form action="/tacos">
//                 <button class="post">
//                     Phone
//                 </button>
//             </form>
//             <form action="/tacos">
//                 <button class="post">
//                     Budget Maker
//                 </button>
//             </form>


//         </main>
//     )
// }

