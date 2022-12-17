import { useNavigate, Route, Routes, Link } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };

    return (
        <>
            <h1>Dashboard</h1>
            <button onClick={handleClick}>Logout</button>

            <Link to={'welcome'}>Welcome</Link>

            <Routes>
                <Route path="welcome" element={<p>Welcome</p>} />
            </Routes>
        </>
    );
}

export default Dashboard;
