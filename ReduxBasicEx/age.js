const {createStore} = require("redux");

//create initialState
const initialState = {
    age:24
}

//create reducer
const reducer = (state=initialState, action)=>{
    switch(action.type){
        case "AGE_UP":
            return{
                ...state,
                age: state.age + action.payload
            }
        case "AGE_DOWN":
        return{
            ...state,
            age:state.age - action.payload
        }
        default:
            return state;

    }
}
//call the createStore
const store = createStore(reducer);

//create subscribe
store.subscribe(()=>{
    console.log(store.getState());
})

//create dispatch
store.dispatch({type:"AGE_UP", payload:1});
store.dispatch({type:"AGE_DOWN", payload:1});