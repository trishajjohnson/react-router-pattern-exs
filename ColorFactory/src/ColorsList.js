import { Link } from "react-router-dom";
import "./ColorsList.css";

const ColorsList = ({colors}) => {
    const allColors = Object.keys(colors).map(color => (
        <li className="color-link">
            <Link className="link-dark" to={`/colors/${color}`}>{color}</Link>
        </li>
    ));

    return (
        <div className="ColorsList">
            <div className="ColorsList-container-1">
                <h1 className="ColorsList-header">Color Factory</h1>
                <Link className="link-light" to={"/colors/add"}>Add a Color</Link>
            </div>
            <div className="ColorsList-container-2">
                <h2>Choose a Color</h2>
                <ul className="ColorsList-list">
                    {allColors}
                </ul>
            </div>
        </div>
    )
}

export default ColorsList;