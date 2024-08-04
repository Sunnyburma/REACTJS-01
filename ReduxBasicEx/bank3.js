const {createStore} = require("redux");

const initialState = {
    bal:8000
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case "WITHDRAW":
            return{
                bal: state.bal - action.payload
            }
        case "DEPOSITE":
                return{
                    bal: state.bal + action.payload
                }
        default:
                    return state;

    }
}

const store = createStore(reducer);
store.subscribe(()=>{
    console.log(store.getState());
})


store.dispatch({type:"DEPOSITE", payload:3500})
store.dispatch({type:"WITHDRAW", payload:6050});
store.dispatch({type:"WITHDRAW", payload:5000});
store.dispatch({type:"WITHDRAW", payload:8000});
store.dispatch({type:"DEPOSITE", payload:20000});