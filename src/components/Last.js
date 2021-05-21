import React from "react";
import Enter from "./Enter/Enter";
import Main from "./Main/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Last = () => {
    return (
        <Router>
            <Route path="/first" component={Enter}></Route>
            <Route path="/second" component={Main}></Route>
        </Router>
    );
}

export default Last;