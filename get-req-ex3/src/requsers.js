import React, { useEffect, useState } from "react";
import axios from "axios";

function Requsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`https://reqres.in/api/users?page=1 `).then(
      (posRes) => {
        console.log(posRes);
        const { data: clone } = posRes;
        const { data } = clone;
        setUsers(data);

        // console.log(posRes)
        // console.log(clone)
        //console.log(data);
      },
      (errRes) => {
        console.log(errRes);
      }
    );
  }, []);
  return (
    <React.Fragment>
      <h1 align="center">Hello ReqRes users!</h1>
      <table align="center" bordercolor="blue" bgColor="silver">
        {/* <tr>
                    <td>S.no</td>
                    <td>Id</td>
                    
                    <td>First_Name</td>
                    <td>Last_Name</td>
                    <td>Email</td>
                    <td>Avatar</td>
                </tr> */}
        {users.map((Element, index) => {
          return (
            <tr>
              {/* <td>{index + 1}</td> */}
              <tr />
              <tr>
                {/* <td>{Element.id}</td> */}
              </tr>

              <tr>
                <th>{Element.first_name}</th>
              </tr>
              <tr>
                <th>{Element.last_name}</th>
              </tr>
              <tr>
                <td>{Element.email}</td>
              </tr>
              <tr>
                <td>
                  <img src={Element.avatar} width="174" alt=""></img>
                </td>
              </tr>
            </tr>
          );
        })}
      </table>

      <h2>welcome2</h2>
      <h2>{JSON.stringify(users)}</h2>
    </React.Fragment>
  );
}
export default Requsers;
