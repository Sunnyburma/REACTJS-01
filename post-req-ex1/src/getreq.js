import React, { useEffect, useState } from "react";
import axios from "axios";
function Getreq(){
    const [pro, setPro]=useState([]);
    
     
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.org/users`).then(
            (posReq)=>{
                
                const {data}=posReq;
                const {0:tdata}=data
                const {login} = tdata;
                const {password} = login;
                console.log(tdata );


            },
            (errRes)=>{console.log(errRes)}
        )
    },[])

    return(
        <React.Fragment>

        <h1>welcome</h1>
        </React.Fragment>
    )


}
export default Getreq;