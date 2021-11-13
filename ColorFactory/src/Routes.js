import React, { useState, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import ColorsList from "./ColorsList";
import AddColorForm from "./AddColorForm";
import Color from "./Color";


const Routes = () => {
    const initialColors = JSON.parse(localStorage.getItem("colors")) || {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF",
        yellow: "#FFFF00"
    };

    const [colors, setColors] = useState(initialColors);

    useEffect(
        () => localStorage.setItem("colors", JSON.stringify(colors)),
        [colors]
    );

    function handleAddColor(newColor) {
        setColors({...colors, ...newColor});
    }

    return (
        <Switch>
            <Route exact path="/colors"><ColorsList colors={colors} /></Route>
            <Route exact path="/colors/add"><AddColorForm addColor={handleAddColor} /></Route>
            <Route exact path="/colors/:color" ><Color /></Route>
            <Redirect to="/colors" />
        </Switch>
    );
}

export default Routes;