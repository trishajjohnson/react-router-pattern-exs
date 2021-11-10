import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";


const Dog = (dog) => {
    // const { name } = useParams();
    const [src, setSrc] = useState(null);

    useEffect(() => {
        try {
            const dogPic = `../public/dog_pics/${dog.name}.png`;
            setSrc(dogPic);
        }
        catch (e) {
            console.log(e);
        }
    }, [dog]);

    let img = src ? <img src={src} alt={dog.name} /> : null;

    return (
        <div className="Dog">
            <h1>Here's a pic of {dog.name}.</h1>
            {img}
        </div>
    );
}

export default Dog;