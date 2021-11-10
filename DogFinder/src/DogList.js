import { Link } from "react-router-dom";

const DogList = ({dogs}) => {

    let dogLinks = dogs.map(dog => (
        <h2>
            <Link id={dog.name} to={`/dogs/${dog.name.toLowerCase()}`} >
                {dog.name}
            </Link>
        </h2>
    ));

    return (
        <div className="DogList">
            <h1>All Dogs</h1>
            <div className="DogList-rows">
               {dogLinks}
            </div>
        </div>
    );
}

export default DogList;