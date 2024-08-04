import React,{useState} from 'react';
const State1 = ()=>{
    const [product,setProduct] = useState([
        {"p_id":111,"p_name":"shirt1","p_cost":1000,"p_image":require("./images/shirt1.jpg")},
        {"p_id":222,"p_name":"shirt2","p_cost":2000,"p_image":require("./images/shirt2.jpg")},
        {"p_id":333,"p_name":"shirt3","p_cost":3000,"p_image":require("./images/shirt3.jpg")},
        {"p_id":444,"p_name":"pant1","p_cost":4000,"p_image":require("./images/pant1.jpg")},
        {"p_id":555,"p_name":"pant2","p_cost":5000,"p_image":require("./images/pant2.jpg")},
        {"p_id":666,"p_name":"pant3","p_cost":6000,"p_image":require("./images/pant3.jpg")}
    ]);
    return(
        <table border={2} cellPadding={25} align='center'>
            <tr>
                <th>S.NO</th>
                <th>P_ID</th>
                <th>P_NAME</th>
                <th>P_COST</th>
                <th>P_IMAGE</th>
            </tr>
            {product.map((element,index)=>{
                return(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{element.p_id}</td>
                        <td>{element.p_name}</td>
                        <td>{element.p_cost}</td>
                        <td><img src={element.p_image} width="200"></img></td>
                    </tr>
                )
            })}
        </table>
    )
}
export default State1;