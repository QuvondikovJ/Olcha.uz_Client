import ReactDom from 'react-dom'
import React from 'react'
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";


function Index() {

    return <div>
        <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
        </Provider>
    </div>

}


ReactDom.render(
    <Index/>,
    document.getElementById('root')
)