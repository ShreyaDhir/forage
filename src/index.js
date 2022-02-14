// connection betwwen create-react-application and html!
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { StateContextProvider } from "./contexts/StateContextProvider";
import { BrowserRouter as Router } from 'react-router-dom';
import "./index.css";

ReactDOM.render(
    <StateContextProvider>
        <Router>
            <App />
        </Router>
    </StateContextProvider>, 
document.getElementById("root")
);