import React from 'react';
import Enter from "./Enter/Enter";
import Main from "./Main/Main";
import Signin from "./Login/Signin/Signin";
import Signup from "./Login/Signup/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Date from "./Reservation/Content/Month";
import SabyInfo from "./SabyInfo/SabyInfo";
import Chat from "./Chat/Chat";
import Reservation from './Reservation/Reservation';
import WriteInfo from "./Reservation/WriteInfo/WriteInfo";
import AdminLogin from './AdminLogin/AdminLogin';

const Last = () => {
    return (
        <Router>
            <Route exact path="/" component={Enter}></Route>
            <Route exact path="/Main" component={Main}></Route>
            <Route exact path="/Signin" component={Signin}></Route>
            <Route exact path="/Signup" component={Signup}></Route>
            <Route exact path="/Chat" component={Chat}></Route>
            <Route path="/Reservation" component={Reservation}></Route>
            <Route path="/Information" component={SabyInfo}></Route>
            <Route path="/admin-login" component={AdminLogin}></Route>
        </Router>
    );
}

export default Last;