import React from "react";

function Child(props){

    return (
        <React.Fragment>
            <button onClick={()=>props.key1("Hello_1","Hello_2","Hello_3")}>
                child-to-parent
            </button>
        </React.Fragment>
    )
}
export default Child;