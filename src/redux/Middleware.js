import axios from "axios";

export const apiCall = (store) => (next) => (action) => {

    if (action.type !== 'apiCall') {
        next(action)
        return
    }

    const {url, method, data, type} = action.payload

    axios({
        url : 'http://localhost:3001'+url,
        method,
        data
    }).then((res) => {
        store.dispatch({
            type,
            payload : res.data
        })
    })

}