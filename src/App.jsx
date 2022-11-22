import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/home";
import CounterPage from "./pages/counter";
import ApiPage from "./pages/api-page";
import UseRefPage from "./pages/useRef";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/counter" element={<CounterPage />} />
                <Route path="/api" element={<ApiPage />} />
                <Route path="/ref" element={<UseRefPage />} />
            </Routes>
        </>
    );
}

export default App;
