//1)create the store
//2)create the state
//3)create the reducer
//4)deploy reducer to store
const {createStore} = require("redux");
//define initialState
const initialState = {
    bal:5000
}
//define reducer
const reducer = (state=initialState,action)=>{                    //reducer bussiness logic
    switch(action.type){
        case "WITHDRAW":
            return{
                bal: state.bal-action.payload
            }
        case "DEPOSITE":
            return{
                bal:state.bal+action.payload
            }
            default:
                return state;
    }
   
};
//call the createStore()
const store = createStore(reducer);                   
store.subscribe(()=>{                                 //subscribe
    console.log(store.getState());
});
store.dispatch({type: "WITHDRAW", payload:1000});            //dispatch
store.dispatch({type:"DEPOSITE", payload:2000});
store.dispatch({type:"WITHDRAW", payload:2000});
store.dispatch({type:"DEPOSITE", payload:3000});
