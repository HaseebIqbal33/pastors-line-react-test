import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from '../views/Home';
const Routes=()=> {
    return (
        <BrowserRouter>
            <Switch>
                <Home/>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;
