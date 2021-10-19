import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./scss/main.scss"
import {BrowserRouter as Router} from "react-router-dom"
import AppProvider from "./StateManager/AppProvider"

ReactDOM.render(
    <React.StrictMode>
        <AppProvider>
            <Router>
                <App />
            </Router>
        </AppProvider>
    </React.StrictMode>, document.getElementById("root")
)

if(undefined){
    undefined.accept()
}