const {createStore} = require("redux")

const initialState = {
    bal:6000
}
const reducer = (state=initialState, action)=>{
    switch(action.type){
        case "WITHDRAW":
        return {
            bal:state.bal -  action.payload
        }
        case "DEPOSITE":
            return{
                bal: state.bal + action.payload
            }
        default:
                return state;
    }
}

const store= createStore(reducer);

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch({type:"WITHDRAW", payload:3000});
store.dispatch({type:"DEPOSITE", payload:4000});
store.dispatch({type:"WITHDRAW", payload:1000});
store.dispatch({type:"DEPOSITE", payload:8000});
store.dispatch({type:"WITHDRAW", payload:3500});