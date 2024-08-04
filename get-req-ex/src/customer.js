import React,{useState,useEffect} from "react";
//where we make rest api call ? 
//we will make rest api call at one hook that hook is useEffect.
import axios from "axios";
//axios is use to make rest api call  

function Customer(){
    const [customer,setCustomer] = useState([]);

    useEffect(()=>{//callback function , 2nd is defidency array.
        axios.get(`https://www.w3schools.com/angular/customers.php`).then(
            //what is axios internally?
            //Axios is internally promises.we can consume promises with then() function.
            //If promises is execute successfully ,which response, positive response
            (posRes)=>{
                const {data}=posRes;
                const {records}=data;
                console.log(records);
                setCustomer(records);
            },(errorRes)=>{
                //If promises is not execute successfully, then which response error response
                console.log(errorRes);
            })
    },[]);

    return(
        <React.Fragment>
            <table cellPadding={10} align="center" >
                <tr>
                    <th>S.NO</th>
                    <th>NAME</th>
                    <th>CITY</th>
                    <th>COUNTRY</th>
                </tr>
                {customer.map((element, index)=>{
                    return(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{element.Name}</td>
                    <td>{element.City}</td>
                    <td>{element.Country}</td>
                </tr>
                )
            })}
            </table>

            {/* <h1>{JSON.stringify(customer)}</h1> */}
        </React.Fragment>
    )

}
export default Customer;