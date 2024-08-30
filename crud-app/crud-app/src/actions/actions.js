//import axios
//axios used to make rest api calls
//arrow function behaves like action
//inner arrow function used to connect to reducer
//dispatch object used to carry the data from actions to reducer
//axios internally returns promises
//async and await keywords are used to consume the promises

import axios from "axios";
const actions = (getState) => {
    console.log(getState);
    return async (dispatch) => {
        //before hit the server
        //consider the success response
        //consider the error response
        dispatch({
            type : "GET_PRODUCT",
            loading : false,
            products : [],
            error : ""
        });
        try {
            const { data } = await axios.get("http://localhost:5000/products");
            dispatch({
                type : "GET_PRODUCT_SUCCESS",
                loading : true,
                products : data,
                error: ""
            });
        } catch (err) {
            
            dispatch({
                type : "GET_PRODUCT_FAIL",
                loading : false,
                products : [],
                error : err.message
            });
        }

    }
}
export default actions;