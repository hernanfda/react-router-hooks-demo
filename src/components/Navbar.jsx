import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav>
                <h2>React Router + Hooks demo</h2>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/counter">Counter - useState()</Link>
                    </li>
                    <li>
                        <Link to="/api">API - useEffect()</Link>
                    </li>
                    <li>
                        <Link to="/ref">useRef()</Link>
                    </li>
                </ul>
            </nav>
            <hr />
        </>
    );
};

export default Navbar;
