import React, {useState} from 'react';
import Child3 from './child3';

function Parent3(){
    const [str, setStr] = useState("");
    const fun=(param1)=>{
        setStr(param1);
    }
    return(
        <React.Fragment>
            <Child3 key1={fun}></Child3>
            <h1>{str}</h1>
        </React.Fragment>

    )
}
export default Parent3; 