import React from 'react';

function Child3(props){
    
    return(
        <React.Fragment>
        <button onClick={()=>{props.key1("Hello")}}>click</button>
        </React.Fragment>

    )
}
export default Child3;