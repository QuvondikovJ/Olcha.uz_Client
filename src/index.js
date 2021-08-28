import ReactDom from 'react-dom'
import React from 'react'
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Index() {

    return <div>
        <Provider store={store}>
        <BrowserRouter>
            <App/>
            <ToastContainer/>
        </BrowserRouter>
        </Provider>
    </div>

}


ReactDom.render(
    <Index/>,
    document.getElementById('root')
)