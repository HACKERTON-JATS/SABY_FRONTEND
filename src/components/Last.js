import React from 'react';
import Enter from "./Enter/Enter";
import Main from "./Main/Main";
import Signin from "./Login/Signin/Signin";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Last = () => {
    return (
        <Router>
            <Route exact path="/" component={Enter}></Route>
            <Route exact path="/Main" component={Main}></Route>
            <Route exact path="/Signin" component={Signin}></Route>
        </Router>
    );
}

export default Last;