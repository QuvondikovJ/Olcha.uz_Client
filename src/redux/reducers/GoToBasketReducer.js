import {createReducer} from '@reduxjs/toolkit';


export default createReducer({goToBasket: false}, {

    EDIT_GO_TO_BASKET: (state, action) => {
        state.goToBasket = action.data
    }
})

export const editGoToBasket = (data) => {
    return {
        type: 'EDIT_GO_TO_BASKET',
        data
    }
}

