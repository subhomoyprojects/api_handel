import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ApiPost1.css";

export const Card = (props) => {
  return (
    <>
      <div className="card-item">
        <div className="card">
          <div className="img-holder">
            <img src={props.imgSrc} alt="" />
          </div>
          <div className="card-description">
            <h2>
              {props.firstName} {props.lastName}
            </h2>
            <p>{props.email}</p>
          </div>
        </div>
      </div>
    </>
  );
};
function ApiPost1(props) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        setInfo(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <main>
      <h1>👍 Welcome to Card Layout 👍</h1>
      <div className="container">
        <div className="card-holder">
          {info.map((data) => {
            return (
              <>
                <Card
                  key={data.id}
                  email={data.email}
                  firstName={data.first_name}
                  lastName={data.last_name}
                  imgSrc={data.avatar}
                />
              </>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default ApiPost1;
