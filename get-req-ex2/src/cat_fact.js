import React, {useState, useEffect} from "react";
import axios from "axios";

function Cat_fact(){

    const [fact,setFact] = useState([]);
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/`).then((posReq)=>{
            const {data}=posReq;
            //const {planet}=data;
            //console.log(planet);
            console.log(data);
            setFact(data);
        },(errReq)=>{
            console.log(errReq);
        })
    },[]);


    return(
        <React.Fragment>
            {/* <table>
                <tr>
                    <th>S.no</th>
                    <th>Set</th>
                    <th>Website</th>
                </tr>
                {data?.map((element,index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{element.data}</td>
                        </tr>

                    )
                })}
                <tr>

                </tr>
            </table> */}
            <h4>{JSON.stringify(fact)}</h4>
            <h1>welcome</h1>
        </React.Fragment>

    )
}
export default Cat_fact