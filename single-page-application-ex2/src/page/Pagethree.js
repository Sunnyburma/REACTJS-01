import React from "react";
import {Link,Outlet} from "react-router-dom"; 

function Pagethree(){

    return(
        <React.Fragment>
        <h1>Hello............pagethree</h1>
        <Link to="/Pagethree/child/childfive" style={{marginRight:100}}>Childfive</Link>
        <Link to ="/Pagethree/child/childsix" >Childsix</Link>
        <br></br><br></br>
        <Outlet></Outlet>
        </React.Fragment>
    )
}
export default Pagethree;