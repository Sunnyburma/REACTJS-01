import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
/*useNavigate => It is use to navigate from one component to another component.
  it is hook useNavigate avilable in react-router-dom package. */

//To read the data from the input is useRef.
function Login(){
    //console.log("6");
    const username = useRef("");
    const upwd = useRef("");
    const navi = useNavigate(); 
    const login = ()=>{
        (username.current.value === "admin" && upwd.current.value ==="admin")?navi(`/dashbord/${username.current.value}`):
        navi("/error");
        /* If username and password is matches the navigate to dashboard else navigate to 
        error page*/
    }

    return(
        <React.Fragment>
            <fieldset>
                <legend>Login_page</legend>
                {/* What the text we enter its storing into the username variable */}
                <input type="text" placeholder='Enter the username' ref={username} ></input>
                <br></br><br></br>
                <input type="password" placeholder='Enter the password' ref={upwd} ></input>
                <br></br><br></br>
                <button onClick={login}>Login</button>
            </fieldset>
        </React.Fragment>
    )
}
export default Login;