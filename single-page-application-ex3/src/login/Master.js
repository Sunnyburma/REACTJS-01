import React from "react";
import Login from "./Login";
import Dashbord from "./Dashbord";
import Error from "./Error";
import {Route,Routes} from 'react-router-dom';
function Master(){

    return(
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Login></Login>}></Route>
                <Route path="/dashbord/:username" element={<Dashbord></Dashbord>}></Route>
                <Route path="/error" element={<Error></Error>}></Route>  
            </Routes>
        </React.Fragment>
    )
}
export default Master;