import React from "react";
import Enter from "./Enter/Enter";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Last = () => {
    return (
        <Router>
            <Route path="/first" component={Enter}></Route>

        </Router>
    );
}

export default Last;