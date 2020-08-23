import React from 'react';
import ReactDOM from 'react-dom';
import "./css/sass/main.sass";
import "./css/sass/notFound.sass";
import "./css/sass/register.sass";
import "./css/sass/tableUsers.sass";
import "./css/sass/adaptation.sass";
import 'bootstrap/dist/css/bootstrap.min.css'
import notFound from "./js/notFound";
// import * as serviceWorker from './js/serviceWorker';
import {Router, Route, browserHistory} from 'react-router';
import {SignIn} from "./js/signForm";
import {Main} from "./js/mainPage";
// localStorage.setItem("Token", "781bd9f1de084f4daa7ba2aa8a71a2eab855354e");
ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Main}/>
        <Route path="/main" component={Main}/>
		<Route path="/login" component={SignIn}/>
        <Route path="/*" component={notFound}/>
    </Router>
),document.getElementById("red"));
