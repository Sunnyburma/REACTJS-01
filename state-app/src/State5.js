import React, {useState} from "react";

const State5 =()=>{

const [product,setProduct] = useState([
    {"p_id":111,p_name : "Shirt1","p_cost":"$10000","p_image":require("./images/shirt1.jpg")},
    {"p_id":222,p_name : "Shirt2","p_cost":"$20000","p_image":require("./images/shirt2.jpg")},
    {"p_id":333,p_name : "Shirt3","p_cost":"$30000","p_image":require("./images/shirt3.jpg")},
    {"p_id":444,p_name : "Pant1","p_cost":"$40000","p_image":require("./images/pant3.jpg")},
    {"p_id":555,p_name : "Pant2","p_cost":"$50000","p_image":require("./images/pant2.jpg")},
    {"p_id":555,p_name : "Pant3","p_cost":"$50000","p_image":require("./images/pant1.jpg")}
]); 
return(
    <React.Fragment>
        <table cellPadding={10} width={20} align="center" border={2 }>
        <tr>
            <th>S.no</th>    
            <th>P_id</th>    
            <th>P_name</th>    
            <th>P_cost</th>    
            <th>P_image</th>    
        </tr> 
        {   product.map((Element,index)=>{
            return(
            <tr key = {index}>
                <td>{index+1}</td>
                <td>{Element.p_id}</td>
                <td>{Element.p_name}</td>
                <td>{Element.p_cost}</td>
                <td><img src={Element.p_image} width={100}></img></td>
            </tr>
            )})
        }
        </table>   
    </React.Fragment>
);

};

export default State5;