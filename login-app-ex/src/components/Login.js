import React, {useRef} from 'react';
//import loginContext from "../context/Context";
  
function Login(){
    const uname = useRef("");
    const upwd = useRef("");
    const fun_one = ()=>{
        uname.current.value === "admin" && upwd.current.value === "admin" ? alert("Login Success") : alert("Login Fail !!!");
    }
    return(
        <React.Fragment>
            <fieldset>
                <legend>login</legend>
                <input type="text" name="username" placeholder="Enter the username" ref={uname}></input>
                <br></br>
                <br></br>
                <input type="password" name="userpassword" placeholder="Enter the password" ref={upwd}></input>
                <br></br>
                <br></br>
                <button onClick={fun_one}>submit</button>
            </fieldset>
        </React.Fragment>
    )
}
export default Login; 