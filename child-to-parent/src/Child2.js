import React from "react";
function Child2(props){
    return(
        <React.Fragment>
            <button onClick={()=>props.key2("welcome_1", "welcome_2",
             "welcome_3")}>click child-to-parent</button>
        </React.Fragment>
    )
}
export default Child2;