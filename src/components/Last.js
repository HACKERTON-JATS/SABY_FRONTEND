import React from 'react';
import Enter from "./Enter/Enter";
import Main from "./Main/Main";
import Login from "./Login/Login";
import AdminLogin from "./AdminLocation/AdminLocation";
import { BrowserRouter as Router, Route} from "react-router-dom";
import AdminReservation from './AdminReservation/AdminReservation';

const Last = () => {
    return (
        <Router>
            <Route exact path="/" component={Enter}></Route>
            <Route exact path="/Main" component={Main}></Route>
            <Route exact path="/Login" component={Login}></Route>
            <Route exact path="/AdminLocation" component={AdminLogin}></Route>
            <Route exact path="/AdminReservation" component={AdminReservation}></Route>
        </Router>
    );
}

export default Last;