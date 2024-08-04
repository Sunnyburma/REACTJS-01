import React from "react";
import Pageone from "./page/Pageone";         //This is path of pageone.js file and imported the contain of our file to another page(master.js)
import Pagetwo from "./page/Pagetwo";         //it will take from <React.Fragment> only..
import Pagethree from "./page/Pagethree";
import Childone from './child/Childone';
import Childtwo from './child/Childtwo';
import Childthree from './child/Childthree';
import Childfour from './child/Childfour';
import Childfive from './child/Childfive';
import Childsix from './child/Childsix';
import {Link,Route,Routes} from "react-router-dom";

function Master(){

    return(
       <React.Fragment>
        <Link to="/pageone1" style={{marginRight:550,marginLeft:200}}>Pageone</Link>
        <Link to="/pagetwo" style={{marginRight:550}}>Pagetwo</Link>
        <Link to="/pagethree" style={{marginRight:500}}>Pagethree</Link>

        <Routes>
            <Route path="/pageone1" element={<Pageone></Pageone>}>
                <Route path="child/Childone" element={<Childone></Childone>}></Route>
                <Route path="child/Childtwo" element={<Childtwo></Childtwo>}></Route>
            </Route>
            <Route path="/pagetwo" element={<Pagetwo></Pagetwo>}>
                <Route path="child/Childthree" element={<Childthree></Childthree>}></Route>
                <Route path="child/Childfour" element={<Childfour></Childfour>}></Route>
            </Route>
            <Route path="/pagethree" element={<Pagethree></Pagethree>}>
               <Route path="child/Childfive" element={<Childfive></Childfive>}></Route>
               <Route path="child/Childsix" element={<Childsix></Childsix>}></Route>
            </Route>
            {/* This type of routing is child routing or nested routing */}
        </Routes>
       </React.Fragment>
    )
}
export default Master;              