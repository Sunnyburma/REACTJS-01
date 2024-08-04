const initialState = {
    bal:50000
};

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case "WITHDRAW":
            return{
                ...state,
                bal:state.bal - action.payload
            }
        case "DEPOSITE":
           return {
            ...state,
                bal : state.bal + action.payload
            }
            default:
                return state;
    }
}
export default reducer;