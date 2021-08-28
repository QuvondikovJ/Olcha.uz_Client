import {configureStore} from "@reduxjs/toolkit";
import catalogVisibleReducer from './reducers/CatalogVisibleReducer'
import goToBasketReducer from './reducers/GoToBasketReducer'
import categoryReducer from './reducers/CategoryReducer'
import {apiCall} from "./Middleware";

export const store = configureStore({
    reducer : {catalogVisibleReducer, goToBasketReducer, categoryReducer},
    middleware : [
    apiCall
]})