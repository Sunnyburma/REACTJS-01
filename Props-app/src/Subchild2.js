import React from "react";

function Subchild2(props){
    const {key_1,key_2,key_3}=props.obj;
    return(
        <React.Fragment>
            <h3>{props.str}</h3>
            <h4>{props.num}</h4>
            <h5>{JSON.stringify(props.bool)}</h5>
            <h5>{key_1},,,,,,,,,,,,,,{key_2}.............{key_3}</h5>
            <table cellPadding={10} align="center" border={1}>
                <tr>
                    <th>S.NO</th>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>COST</th>
                    <th>IMAGE</th>
                </tr>
                {props.product.map((element,index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{element.id}</td>
                            <td>{element.p_name}</td>
                            <td>{element.p_cost}</td>
                            <td><img src={element.image} width={100} alt=""></img></td>
                        </tr>
                    );
                })}
            </table>
            </React.Fragment>


    );
}
export default Subchild2;