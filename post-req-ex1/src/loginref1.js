import React, { useRef, useState } from "react";
import axios from "axios";

const Login = ()=>{
    const email=useRef("");
    const password=useRef("");
    const [status, setStatus]=useState({});
    const login = ()=>{
        axios.post(`https://reqres.in/api/login`,{"email": email.current.value, "password": password.current.value}).then(
            (posReq)=>{ console.log(posReq)
                const {data} = posReq;
               // const {token} = data;
                alert("success");
               // console.log(posReq.data.token)
                setStatus(data);
            },
               // 
               
                (errRes)=>{console.log(errRes)
                    alert("fail..!!!");
                }   
        )
    }
    return(
        <React.Fragment>
            <fieldset>
                <legend>Login</legend>
                <table>
                    <tbody>
                    <tr>
                        <td>UserName</td>
                        <td><input type="text" placeholder="Enter The username" ref={email}></input></td>
                        
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="password" placeholder="Enter The password" ref={password}></input></td>
                    </tr>
                    <tr>
                        <td><button onClick={login}>Login</button></td>
                    </tr>
                    {/* <tr>
                        <td>{status}</td>
                    </tr> */}
                    <tr>
                        <td>{JSON.stringify(status)}</td>
                    </tr>
                    </tbody>
                </table>
            </fieldset>
        </React.Fragment>
    )
}
export default Login;