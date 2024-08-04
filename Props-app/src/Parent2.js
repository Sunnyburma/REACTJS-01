import React, { useState } from "react";
import Child2 from "./Child2";

function Parent2(){
    const [str] = useState("Hello_1");
    const [num] = useState(10000);
    const [bool] = useState(true);
    const [obj] = useState({"key_1": "hello_1", "key_2":"Hello_2", "key_3" : "Hello_3"});
    const [product] = useState([
        {"id": 111, "p_name":"p_one", "p_cost": 10000, "image":require("./images/shirt1.jpg")},
        {"id": 222, "p_name":"p_two", "p_cost": 20000, "image":require("./images/shirt2.jpg")},
        {"id": 333, "p_name":"p_three", "p_cost": 30000, "image":require("./images/shirt3.jpg")},
        {"id": 444, "p_name":"four", "p_cost": 40000, "image":require("./images/pant1.jpg")},
        {"id": 555, "p_name":"p_fiv", "p_cost": 50000, "image":require("./images/pant3.jpg")}
    ]);
    return(
        <React.Fragment>

            <Child2 str = {str}
                    num = {num}
                    bool={bool}
                    obj={obj}
                    product={product}
                    >
            </Child2> 
        </React.Fragment>

    );
}
export default Parent2;