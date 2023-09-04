import { Outlet, Link } from "react-router-dom";
import React from "react";
import './maincontent.css';
const MainContent = () => {
    return (
        <>
            <div className="lower-nav">

                <div className="fsh">
                    <li className="anchor-nav2">
                        <Link to={"/about"} className="ul-Link2" ><div className="Desk-visible1">About US</div></Link>
                    </li>
                    <li className="anchor-nav2">
                        <Link to={"/usee"} className="ul-Link2" ><div className="Desk-visible1">How to Use?</div></Link>
                    </li>
                </div>
                <nav className="main-nav2">
                    <h1 className="nav-head">
                        Here is Budget Maker for you !

                    </h1>


                    <ul className="main-ul" >
                        <li className="anchor-nav2">
                            <Link to={"/budget"} className="ul-Link2" ><div className="Desk-visible1">Budget maker</div></Link>
                        </li>
                        <br />

                        <h1 className="nav-head">
                            What are You Looking for?
                        </h1>
                        <br />
                        <li className="anchor-nav2">
                            <Link to={"/ff"} className="ul-Link2" ><div className="Desk-visible1">Car Predictor</div></Link>
                        </li>

                        <li className="anchor-nav2">
                            <Link to={"/xy"} className="ul-Link2" ><div className="Desk-visible1">Laptop Predictor</div></Link>
                        </li>
                        <li className="anchor-nav2">
                            <Link to={"/mobile"} className="ul-Link2" ><div className="Desk-visible1">Phone Predictor</div></Link>
                        </li>
                        <li className="anchor-nav2">
                            <Link to={"/houses"} className="ul-Link2" ><div className="Desk-visible1">House Predictor</div></Link>
                        </li>
                        <button id="lower-nav-btn">
                            <img src="../public/menu.svg" alt="" srcset="" />
                        </button>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </>
    );
};

export default MainContent;