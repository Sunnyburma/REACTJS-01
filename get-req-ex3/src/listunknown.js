import React, { useEffect, useState } from "react";
import axios from "axios";

function Listknown(){
       const [send, setSend]= useState([]);
      const [send2, setSend2]= useState([]);
    useEffect(()=>{
        axios(`https://reqres.in/api/unknown`).then((posRes)=>{
            console.log(posRes);
            const {data:jack}=posRes;
            const {data}=jack 
            console.log(data)
            console.log(jack)
            setSend(data);
           setSend2(jack);
            
        },
            (errRes)=>{
                console.log(errRes);

            }
        )
},[])
    return(
        <React.Fragment>
            <h1 align="center">List Unknown</h1>
            <table cellPadding={10} border={1} bordercolor="orange" align="center">
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Year</td>
                    <td>Color</td>
                    <td>Pantone_value</td>
                </tr>

              {send.map((element,index)=>{return( 
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{element.name}</td>
                    <td>{element.year}</td>
                    <td>{element.color}</td>
                    <td>{element.pantone_value}</td>
                </tr>
                )})} 
                <tr>
                    <td></td>
                    <td bordercolor="white"></td>
                    <td bordercolor="white">Page{send2.page}</td>
                </tr>
            </table>
            <h2>{JSON.stringify(send)}</h2>
            <h2>welcome</h2>
            <h2>{JSON.stringify(send2.page)}</h2>
        </React.Fragment>
    )
}
export default Listknown;