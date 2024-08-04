import React from 'react';
import { useParams } from 'react-router-dom';

function Dashbord(){
    const params = useParams();
    //useParams => is use to read the data
    return(
        <React.Fragment>
            <h1>Dashbord page.................!!!!{params.username}</h1>
        </React.Fragment>
    )
}
export default Dashbord;