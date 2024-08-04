import React from "react";
import Subchild2 from "./Subchild2";
function Child2(props){
    return(
        <React.Fragment>
            <Subchild2 {...props}></Subchild2>           {/*props deriling*/ }
            
        </React.Fragment>
    )

}
export default Child2;