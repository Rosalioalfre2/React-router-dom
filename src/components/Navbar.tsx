import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
    const user = "Rosalio";

    return (
        <div>
            <ul>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "active" : "no_active"
                        }
                        to={"/"}
                    >
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "active" : "no_active"
                        }
                        to={"/about"}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "active" : "no_active"
                        }
                        to={"/aaaaa"}
                    >
                        aaaa
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "active" : "no_active"
                        }
                        to={"/user"}
                    >
                        Usuario index
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "active" : "no_active"
                        }
                        to={"/user/" + user}
                    >
                        Usuario Rosalio
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "active" : "no_active"
                        }
                        to={"/dashboard"}
                    >
                        Dashboard
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
