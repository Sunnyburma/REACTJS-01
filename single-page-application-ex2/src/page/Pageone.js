import React from "react";
import {Link, Outlet} from 'react-router-dom';

function Pageone(){

    return(
        <React.Fragment>
            <h1>Hello...........Pageone!!!!!!!!!!!</h1>
            
            <Link to="/Pageone1/child/childone" style={{marginRight:100}}>Childone</Link>
            <Link to ="/Pageone1/child/childtwo" >Childtwo</Link>
            <br></br><br></br>
            <Outlet></Outlet> 
            {/* this is the placeholder use to place the childone 
            either childtwo is caled outlet */}
        </React.Fragment>
    )
}
export default Pageone;