import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';

import Config from '.Config';

class App extends Component {
    render() {
        <BrowserRouter basename={Config.BASE_URL}>
            <div>
                <Route exact path="/" component={Home}/>
            </div>
        </BrowserRouter>
    }
}