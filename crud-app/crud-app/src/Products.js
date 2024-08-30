import React from "react";
import { useDispatch,useSelector } from "react-redux";
import deleteActions from "./actions/deleteActions";

const Products = (props)=>{
    const dispatch = useDispatch();
    const remove = (id)=>{
        console.log(id);
        dispatch(deleteActions(id));
        
    }
    return(
        <>
            {/* {JSON.stringify(props.products)} */}
            <table border={1} cellPadding={10} align="center" cellSpacing={10} bgcolor="silver" bordercolor="black">
                <thead>
                <tr>
                    <th>S.NO</th>
                    <th>ID</th>
                    <th>P_ID</th>
                    <th>P_NAME</th>
                    <th>P_COST</th>
                    <th>UPDATE</th>
                    <th>DELETE</th>
                </tr>
                </thead>
                <tbody>
                {props.products.map((element, index)=>{
                    return(
                        
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{element._id}</td>
                            <td>{element.p_id}</td>
                            <td>{element.p_name}</td>
                            <td>{element.p_cost}</td>
                            <td><button >UPDATE</button></td>
                            <td><button onClick={()=>remove(element.p_id)} >DELETE</button></td>
                        </tr>
                        
                    )
                })}
                </tbody>
            </table>
        </>
    )

}
export default Products;