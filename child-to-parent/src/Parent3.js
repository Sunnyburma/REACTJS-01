import React,{useState} from "react";
import Child3 from './Child3'
function Parent3(){
    const [str1,setStr1] = useState("");
    const [str2,setStr2] = useState("");
    const [str3,setStr3] = useState("");
    const fun_one = (param1,param2,param3)=>{
        setStr1(param1);
        setStr2(param2);
        setStr3(param3);
    }

    return(

        <React.Fragment>
            <Child3 key={fun_one}> </Child3>
            <h1>{str1}........{str2}..........{str3}</h1>
        </React.Fragment>
    )

}
export default Parent3;
