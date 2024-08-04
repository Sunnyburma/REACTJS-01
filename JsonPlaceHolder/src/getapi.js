import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Getapi(){
    const [rest, setRest] = useState([]);

    
    useEffect(()=>{
    axios.get(`https://jsonplaceholder.org/posts`).then(                
        //https://jsonplaceholder.typicode.com/posts
        (posRes)=>{
            //console.log(posRes.flat());
            const {data} =posRes;
            const {0:data2}=data;
            const {category} = data2;
            setRest(data);
            console.log(data);

        },(errRes)=>{
            console.log(errRes);
        }
    )},[]);


    return(
        <React.Fragment>
            
            <table bgColor="silver" border={1} borderColor="blue" cellPadding={10} align='center'>
                <tr>
                    <th>S.NO</th>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>CATEGORY</th>
                    <th>CONTENT</th>
                    <th>IMAGE</th>
                    <th>PUBLISHEDAT</th>
                    <th>UPDATEAt</th>
                    <th>SLUG</th>
                    <th>STATUS</th>
                    <th>THUMBNAIL</th>
                    <th>URL</th>
                    <th>USERID</th>
                </tr>
                {rest.map((element,index)=>{
                    return(
                        <tr key ={index}>
                            <td>{index+1}</td>
                            <td>{element.id}</td>
                            <td>{element.title}</td>
                            <td>{element.category}</td>
                            <td>{element.category}</td>
                            <td><img src={element.image} width="175"  alt=''></img></td>
                            <td>{element.publishedAt}</td>
                            <td>{element.updatedAt}</td>
                            <td>{element.slug}</td>
                            <td>{element.status}</td>
                            <td><img  src={element.thumbnail} width="175" height="100" alt=""></img></td>
                            <td>{element.url}</td>
                            <td>{element.userId}</td>    
                        </tr> 
                    )
                })}
            </table>
            <h1>Welcome</h1>
            <h4>{JSON.stringify(rest)}</h4>
        </React.Fragment>
    )
}
export default Getapi;