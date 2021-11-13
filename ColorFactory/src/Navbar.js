import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
    
return (

    <nav className="Navbar">
        <h2 className="Navbar-header">Welcome to the Color Factory</h2>
        <h3 className="Navbar-link">

            <Link className="link" to={"/colors/add"}>
                Add a Color
            </Link>
        </h3>
        
    </nav>
);
}

export default Navbar;