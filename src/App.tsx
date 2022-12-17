import {
    BrowserRouter,
    Route,
    Routes,
    Navigate,
    Outlet,
    Link,
} from "react-router-dom";
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
                    <Route
                        path="/usuario"
                        element={<Navigate to={"/user"} />}
                    />
                    <Route path="/user/:id" element={<UserPages />} />
                    <Route path="/dashboard/*" element={<Dashboard />}>
                        <Route
                            path="welcome/*"
                            element={
                                <>
                                    <p>Welcome</p>
                                    <Outlet />
                                    <Link to={'user'}>Usuario</Link>
                                </>
                            }
                        >
                            <Route
                                path="user"
                                element={<p>Usuario welcome</p>}
                            />
                        </Route>
                        <Route path="goodbye" element={<p>Goodbye</p>} />
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
