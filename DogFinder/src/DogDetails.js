import { useParams, Link, Redirect } from "react-router-dom";
import "./DogDetails.css";

const DogDetails = ({dogs}) => {
    const { name } = useParams();
    const dog = dogs.filter(dog => dog.name.toLowerCase() === name);
    
    if(!dog[0]) return <Redirect to="/dogs" />

    return (
        <div>
            <h1 data-testid={`DogDetails-header-${dog[0].name}`}>{dog[0].name}</h1>
            <img className="DogDetails-img" src={dog[0].src} alt={dog[0].name.toLowerCase()} />
            <p><b>Age</b>: {dog[0].age}</p>
            <p><b>FACTS</b></p>
            <ul className="facts">
              {dog[0].facts.map(fact => (
                  <li>{fact}</li>
              ))}  
            </ul>
            <Link to={`/dogs`} >Back to All Dogs</Link> 
        </div>
    );
}

export default DogDetails;