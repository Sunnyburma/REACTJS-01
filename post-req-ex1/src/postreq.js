import  React, { useEffect } from "react";
import axios from 'axios';

function Postreq(){
    useEffect(()=>{
        axios.post(`http://test-routes.herokuapp.com/test/uppercase`,{$message:'hello'}).then(
            (posReq)=>{console.log(posReq)},

            (errRes)=>{console.log(errRes)}
        )
    },[])
    return(
        <React.Fragment> 

        </React.Fragment>
    )
}
export default Postreq;