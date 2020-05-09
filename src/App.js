import React from 'react';
import './App.css';
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shopPage/shopPage.component";
import {Route} from 'react-router-dom';

function App() {
    return (
        <div>
            <Route exact path='/' component={Homepage}/>
            <Route path='/shop' component={ShopPage}/>
        </div>
    );
}

export default App;
