import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import DogList from "./DogList";
import DogDetails from "./DogDetails";

const Routes = ({dogs}) => {
    
    return (
        <Switch>
            <Route exact path="/dogs/:name"><DogDetails dogs={dogs} /></Route>
            <Route exact path="/dogs"><DogList dogs={dogs}/></Route>
            <Redirect to="/dogs" />
        </Switch>
    )
}

export default Routes;