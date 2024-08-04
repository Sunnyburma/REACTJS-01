import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const Login=()=>{
    const [status, setStatus]= useState({});
    const uname= useRef("");
    const upwd= useRef("");
    
    const login = ()=>{
        console.log(uname.current.value);
        console.log(upwd.current.value);
        axios.post(`https://jsonplaceholder.org/users`,{"uname":uname.current.value,"upwd":upwd.current.value}).then(
            (posReq)=>{
               // const {data}=posReq;
                //setStatus(data);
                const {data}=posReq;
                console.log(data );
                // const {0:tdata}=data
                // const {login:adata} = tdata;
                setStatus(data);
               
            },
            (errRes)=>{
                console.log(errRes);
            }
        )
    }
    
     
    // useEffect(()=>{
    //     axios.get(`https://jsonplaceholder.org/users`).then(
    //         (posReq)=>{
                
    //             const {data}=posReq;
    //             const {0:tdata}=data
    //             const {login} = tdata;
    //             const {password} = login;
    //             console.log(password );
    //         },
    //         (errRes)=>{console.log(errRes)}
    //     )
    // },[])

    return(
        <React.Fragment>
        <h1>welcome</h1>
        <fieldset>
            <legend>Login</legend>
        <table>
        <tbody>
            <tr>
                <td><input type="text" name="uname" placeholder="Enter the name" ref={uname}></input></td>
            </tr>
            <tr>
                <td><input type="text" name="upwd" placeholder="Enter the password" ref={upwd}></input></td>
            </tr>
            <tr>
                <td>
                    <button onClick={login}>Login</button>
                </td>
            </tr>
            <tr>
                <td>
                    {status.token ? <h1>Login success</h1>:<h1>login fail!!!!</h1>}
                </td>
            </tr>
            </tbody>
        </table>
        
        </fieldset>

        </React.Fragment>
    )


}
export default Login;