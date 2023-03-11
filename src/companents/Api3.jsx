import axios from "axios";
import React, { useEffect, useState } from "react";

function Api3(props) {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        setInfo(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("Api Call over!");
      });
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Img</th>
          </tr>
        </thead>
        <tbody>
          {/* You can slice limit data slice(startpoint,endpoints) using slice method */}
          {info.slice(0, 3).map((data, index) => {
            return (
              <>
                <tr key={index++}>
                  <td>{data.id}</td>
                  <td>{data.email}</td>
                  <td>{data.first_name}</td>
                  <td>{data.last_name}</td>
                  <td>
                    <img src={data.avatar} width="20%" height="20%" alt="" />
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Api3;
