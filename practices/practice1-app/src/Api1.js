import React,{useState, useEffect} from 'react';
import axios from 'axios';

function Api(){
    const [mycustomers, setCustomers] = useState();

    useEffect(()=>{
        axios(`https://www.w3schools.com/angular/customers.php`).then(
            (posRes)=>{
                console.log(posRes);
                const {data}=posRes;
                const {records} = data
                setCustomers(records);
                //console.log(mycustomers);
                
            },(errRes)=>{
                console.log(errRes)}
        )
    },[])

//align='center' border={3} borderColor='red' bgcolor='silver'
//cellPadding={10} border={2} align='center' borderColor='blue' bgcolor='silver'> 
    return(
        <React.Fragment>
            <table >
            
                <tr>
                    <th>S.NO</th>
                    <th>NAME</th>
                    <th>City</th>
                    <th>Country</th>
                </tr>
                {mycustomers && mycustomers.map((element,index)=>{
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

        </React.Fragment>
    )
}
export default Api;