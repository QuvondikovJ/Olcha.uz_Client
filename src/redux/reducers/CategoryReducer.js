import {  createReducer, createAction  } from '@reduxjs/toolkit'


const apiCall = createAction('apiCall')

export default createReducer({
    categories : []
},{

    GET_CATEGORIES : (state, action) =>{
        state.categories = action.payload
    }

})

export const getCategories = ()=>apiCall({
  type : 'GET_CATEGORIES',
  method : 'get',
  url : '/categories',
})

