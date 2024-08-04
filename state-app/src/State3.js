
import React,{useState} from "react";

const State3 = ()=>{
    const [sub, setSub] = useState("REACTJS 18x");
    const [num,setNum] = useState(100);
    const [obj,setObj] = useState({key1:"MERN", key2:"MEAN", key3: "MEVN"});
    const [subject,setSubject] = useState(["ReactJS", "NodeJS","MongoDB","ExpressJS","AngularJS","VueJS"]);
    const [flag,setFlag] = useState(true);
    const my_fun=()=>{
        setFlag(flag=>!flag);
    }
    return(
        <React.Fragment>
            <button onClick={my_fun}>click_me</button>
            {flag?( <div>
                        <h2>{sub}</h2>
                        <h3>{num}</h3>
                        <h4>{obj.key1}.....{obj.key2}....{obj.key3}</h4>
                        {
                            subject.map((element,index)=>{
                            return(<h5 key={index}>{element}</h5>)
                                })
                        }
                </div>):null}
          

        </React.Fragment>

    )
}
export default State3;
