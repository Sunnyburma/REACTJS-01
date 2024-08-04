import React, { useRef } from "react";
import axios from "axios";

const Login=()=>{
    const uname=useRef("");
    const upwd=useRef("");
    const login = ()=>{
        console.log(uname.current.value);
        console.log(upwd.current.value);
        axios.post(`https://jsonplaceholder.org/users`,{"uname": uname.current.value, "upwd": upwd.current.value}).then(
            (posReq)=>{
                console.log(posReq),
                (errRes)=>{console.log(errRes)}
            }
        )
    }
    return(
        <React.Fragment>
            <fieldset>
                <legend>Login</legend>
                <table>
                    <tr>
                        <td>UserName</td>
                        <td><input type="text" placeholder="Enter The username" ref={uname}></input></td>
                        
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="password" placeholder="Enter The password" ref={upwd}></input></td>
                    </tr>
                    <tr>
                        <td><button onClick={login}>Login</button></td>
                    </tr>
                </table>
            </fieldset>
        </React.Fragment>
    )
}
export default Login;