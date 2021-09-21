import React from 'react';
import { Route, Switch} from "react-router-dom";

import Home from "./Home";
import MoviesReview from "./MoviesReview";
import VideoGameReview from "./VideoGameReview";
import ShowsReview from "./ShowsReview";
import NavBar from "./NavBar";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path= "/moviesreview">
                    <MoviesReview />
                </Route>
                <Route exact path= "/showsreview">
                    <ShowsReview />
                </Route>
                <Route exact path= "/videogamereview">
                    <VideoGameReview />
                </Route>
                <Route exact path= "/">
                    <Home />
                </Route>
            </Switch>
        </div>
        
    )
}

export default App
