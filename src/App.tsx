import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import UserPages from "./pages/UserPages";
import UserPage from "./pages/UserPage";
import Dashboard from "./pages/Dashboard";

function App() {
    return (
        <>
            <BrowserRouter>
                {/* ! Importantisimo que los NavLink vayan dentro de BrowserRouter */}
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/user" element={<UserPage />} />
                    <Route path="/usuario" element={<Navigate to={'/user'}/>} />
                    <Route path="/user/:id" element={<UserPages />} />
                    <Route path="/dashboard/*" element={<Dashboard/>}></Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
