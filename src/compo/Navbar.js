import { Outlet, Link } from "react-router-dom";
import React from "react";
import "./.Navbar.css";

const Navbar = () => {
    return (
        <>
            <nav className="Nav-main1">

                <img src={"https://cdn.dribbble.com/users/1945206/screenshots/15242254/media/b37016ed33b1d8450d18278b217800a2.jpg?compress=1&resize=800x600"} classname="ty" alt="" />
                <ul>
                    <li className="anchor-nav visionview">Vision View</li>

                </ul>

            </nav>
            <Outlet />
        </>
    );
};

export default Navbar;

