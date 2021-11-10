import { NavLink } from "react-router-dom";

import "./Navbar.css";

const ACTIVE_STYLES = {
    fontWeight: "bold",
    color: "white",
  };

const Navbar = ({dogs}) => {
let navLinks = dogs.map(dog => (
    <NavLink key={dog.name} className="Navbar-link" to={`/dogs/${dog.name.toLowerCase()}`} activeStyle={ ACTIVE_STYLES }>
        {dog.name}
    </NavLink>
));
    
return (

    <nav className="Navbar">
        <NavLink className="Navbar-link" to={"/dogs"} activeStyle={ ACTIVE_STYLES }>
            Home
        </NavLink>
        {navLinks}
    </nav>
);
}

export default Navbar;