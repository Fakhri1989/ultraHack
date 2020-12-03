import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";

import AddLecturePage from "./pages/AddLecturePage";

const App = (props) => {
    return (
        <>
            <Header />
            <div className='pageWrapper'>
                <BrowserRouter>
                    <Switch className='App'>
                        <Route exact path='/' render={() => <AddLecturePage />} />
                    </Switch>
                </BrowserRouter>
            </div>
        </>
    );
};

export default App;
