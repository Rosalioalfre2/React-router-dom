import { useNavigate, Link, Outlet } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };

    return (
        <>
            <h1>Dashboard</h1>
            <button onClick={handleClick}>Logout</button>

            <br />
            <Link to={"welcome"}>Welcome</Link>
            <br />
            <Link to={"goodbye"}>Goodbye</Link>

            <Outlet />
            {/* En Outlet pinta lo que esta fuera de la ruta */}
        </>
    );
}

export default Dashboard;
