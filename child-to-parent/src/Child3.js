import React from "react";

function Child3(props){
    const key1 = props.key1;
    
    const fun_two = ()=>{console.log("Welcome")}
    const my_key = props.key1?key1:fun_two
    return(
        <React.Fragment>
            <button onClick={()=>{my_key("Hello1","hello2","Hello3")}}>
                click</button>
        </React.Fragment>
    )
}
export default Child3;   