import axios from 'axios';
const actions =()=>{
    return async (dispatch)=>{
        dispatch({
            type: "GET_PRODUCTS",
            loading:false,
            products:[],
            error:"",
            })
    }
}