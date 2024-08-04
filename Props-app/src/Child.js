import React from "react";

function Child(props){
    const {key1,key2,key3} = props.obj
    const {p_id,p_name,p_cost} = props.obj1
    return (
        <React.Fragment>
            <h1>{props.str}</h1>
            <h2>{props.num}</h2>
            <h2>{JSON.stringify(props.bool)}</h2>
            <h3>{key1}......{key2}...............{key3}</h3>
            
            <table cellPadding={10} align="center" border={1}>
                <tr>
                    <th>S.no</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Cost</th>
                </tr>
                {props.obj1.map((element, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{element.p_id}</td>
                            <td>{element.p_name}</td>
                            <td>{element.p_cost}</td>
                        </tr>
                    )
                })}
            </table>
            <h3 align="center" cellPadding={10} >{props.children}</h3>
        </React.Fragment>
    );
}
export default Child;