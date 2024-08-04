const {createStore} =require("redux")
const initialState = {
    bal:5000
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
       case "WITHDRAW":
        return{
            bal: state.bal-action.payload
        }
        case"DEPOSITE":
        return{
            bal: state.bal + action.payload
        }
        default:
            return state;
    }

}

const store = createStore(reducer);
store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch({type:"WITHDRAW", payload:1000});
store.dispatch({type:"DEPOSITE", payload:4000});
store.dispatch({type:"WITHDRAW", payload:2000});
store.dispatch({type:"DEPOSITE", payload:5000});
store.dispatch({type:"WITHDRAW", payload:300});
store.dispatch({type:"DEPOSITE", payload:7020});
