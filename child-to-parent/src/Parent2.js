import React, { useState } from "react";
import Child2 from "./Child2";
function Parent2(){
    const [str1, setStrone] = useState("");
    const [str2, setStrtwo] = useState("");
    const [str3, setStrthree] = useState("");
    const fun_one = (param1, param2, param3)=>{
        setStrone(param1);
        setStrtwo(param2);
        setStrthree(param3);
}
    return(
        <React.Fragment>
            <Child2 key2={fun_one}></Child2>
                   <h1> {str1+"......"}{"........"+str2+".................."}{str3}</h1>
            
        </React.Fragment>
    )
}
export default Parent2;