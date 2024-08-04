import React from "react";
import {Link,Outlet} from "react-router-dom"; 

function Pagetwo(){

    return(
        <React.Fragment>
            <h1>Hello.......pagetwo</h1>
            <Link to="/Pagetwo/child/childthree" style={{marginRight:100}}>Childthree</Link>
            <Link to ="/Pagetwo/child/childfour" >Childfour</Link>
            <br></br><br></br>
            <Outlet></Outlet>
        </React.Fragment>
    )
}
export default Pagetwo;