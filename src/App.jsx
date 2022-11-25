import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Layout";
import HomePage from "./pages/home";
import CounterPage from "./pages/counter";
import ApiPage from "./pages/api-page";
import UseRefPage from "./pages/useRef";
import DynamicRoutesPage from "./pages/dynamic-routes";

function App() {
    return (
        <>
            {/* <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/counter" element={<CounterPage />} />
                <Route path="/api" element={<ApiPage />} />
                <Route path="/ref" element={<UseRefPage />} /> */}
            {/* agregando un /* al final del path de una ruta, la transformo en ruta dinamia */}
            {/* <Route path="/dynamic_routes/*" element={<DynamicRoutesPage />} />
            </Routes> */}
            {/* //TODO: Pasar las rutas al formato de abajo */}
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<HomePage />} />
                    <Route path="counter" element={<CounterPage />} />
                    <Route path="api" element={<ApiPage />} />
                    <Route path="ref" element={<UseRefPage />} />
                    <Route path="dynamic_routes/*" element={<DynamicRoutesPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
