import {createReducer} from '@reduxjs/toolkit';


export default createReducer({catalog: false}, {

    EDIT_CATALOG: (state, action) => {
        state.catalog = action.data
    }
})

export const editCatalog = (data) => {
    return {
        type: 'EDIT_CATALOG',
        data
    }
}

