import React, {useEffect, useState} from "react";
import axios from "axios";


function Restfullapi(){
    const [rest,setRest] = useState([]);

    useEffect(()=>{
        axios.get(`https://api.restful-api.dev/objects`).then((posRes)=>{//url=https://api.restful-api.dev/objects
            const {data:my} = posRes;
            const {data} = my;
            setRest(my);
            // const {data} = alish;
            //console.log(posRes);
           // console.log(alish)
           console.log(my);
           console.log(posRes)
        },(errRes)=>{
            console.log(errRes);
        })
    },[]);
    return(
        <React.Fragment>
                <table cellPadding={10} align="center" border={1} bordercolor="blue">
                <tr>
                    <th>S.NO</th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Colour</th>
                    <th>Price</th>
                    <th>Capacity</th>
                    <th>Generation</th>
                    <th>Case_Size</th>
                    <th>Strap_Colour</th>
                    <th>CPU_model</th>
                    <th>Harddisksize</th>
                    <th>year</th>
                    <th>Description</th>
                </tr>
                {rest.map((element, index)=>{
                    return(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{element.id}</td>
                    <td>{element.name}</td>
                    <td>{element.data && element.data.color }</td>
                    <td>{element.data && element.data.price}</td>
                    <td>{element.data && element.data.capacity}</td>
                    <td>{element.data && element.data.Generation}</td>
                    <td>{element.data && element.data.CaseSize}</td>
                    <td>{element.data && element.data.StrapColour}</td>
                    <td>{element.data && element.data.CPUmodel}</td>
                    <td>{element.data && element.data.Harddisksize}</td>
                    <td>{element.data && element.data.year}</td>
                    <td>{element.data && element.data.Description}</td>
                </tr>
                )
            }
            )}
            </table>
            <h1>Welcome...........</h1>
            <h3>{JSON.stringify(rest)}</h3>
        </React.Fragment>
    )
}
export default Restfullapi;
