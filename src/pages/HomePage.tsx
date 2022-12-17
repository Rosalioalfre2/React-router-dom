import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <h1>Hola papu</h1>
            <Link to={"/about"}>About</Link>
        </div>
    );
}

export default HomePage;
