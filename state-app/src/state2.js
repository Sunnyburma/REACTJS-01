import React, { useState } from "react";
const State2 = ()=>{
    const [obj,setobj] = useState({"p_id":"111", "p_name": "p_111", "p_cost":10000});
    const [arr,setArr] = useState([ 10,20,30,40,50]);
    const [product,setProduct] = useState([
        {p_id:"111",p_name:"shirt1", p_cost: "$1000.00",p_image:"./images/shirt1.jpg"},
        {p_id:"222",p_name:"shirt2", p_cost: "$2000.00",p_image:"./images/shirt2.jpg"},
        {p_id:"333",p_name:"shirt3", p_cost: "$3000.00",p_image:"./images/shirt3.jpg"},
        {p_id:"444",p_name:"pant1", p_cost: "$1500.00",p_image:"./images/pant1.jpg"},
        {p_id:"555",p_name:"pant2", p_cost: "$2500.00",p_image:"./images/pant2.jpg"},
        {p_id:"666",p_name:"pant3", p_cost: "$3500.00",p_image:"./images/pant3.jpg"},
    ]);
    return(
        <React.Fragment>
        <h1>p_id : {obj.p_id}</h1>
        <h1>p_name : {obj.p_name}</h1>
        <h1>p_cost : {obj.p_cost}</h1>
        {
            arr.map((element,index)=>{
                return(<h1 key = {index}>{element}</h1>)  //key property to track the element while iterating the element
            })
        }

        <hr></hr>
        <table cellPadding={10} border={1} align="center">
            <tr>
                <th>S.no</th>
                <th>P_id</th>
                <th>P_name</th>
                <th>P_cost</th>
                <th>P_image</th>
            </tr>
            {
                product.map((element,index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{element.p_id}</td>
                            <td>{element.p_name}</td>
                            <td>{element.p_cost}</td>
                            <td><img src={element.p_image} width="100" alt="" ></img> </td>
                        </tr>
                    )
                })
            }
        </table>
        </React.Fragment>
    )
};
export default State2;