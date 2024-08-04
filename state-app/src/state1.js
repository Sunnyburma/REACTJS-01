import React,{useState} from 'react';

let State1 = ()=>{
    const [str, setstr] = useState("Hello");
    const [num, setnum]= useState(1000);      /*setnum is use to mortife the value*/
    const [bool,setbool] = useState(true);
    const fun_one = ()=>{
        setbool(bool=>!bool);
    }
    return(
        <React.Fragment>
            <button onClick = {fun_one}>click_me</button>
            {bool?(<div>
        <h1>{str}</h1>
        <h1>{num}</h1>
        <h1>{bool}</h1>
        </div>):null}
        </React.Fragment>
    )
};
export default State1;