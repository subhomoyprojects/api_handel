import axios from "axios";
import React, { useState } from "react";

function ApiPost(props) {
  const [data, setData] = useState({ name: "", job: "" });
  const [resp, setResp] = useState({ id: "", createdAt: "" });
  const valChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const callapi = (e) => {
    axios
      .post("https://reqres.in/api/users", { name: data.name, job: data.job })
      .then((res) => {
        setResp({ id: res.data.id, createdAt: res.data.createdAt });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h2>Get Response</h2>
      <form>
        <label htmlFor="">Get Name</label>
        <input type="text" name="name" onChange={valChange} />
        <label htmlFor="">Get Job</label>
        <input type="text" name="job" onChange={valChange} />
        <input type="button" value="Submit" onClick={callapi} />
      </form>
      <p>RES ID: {resp.id}</p>
      <p>DATE: {resp.createdAt}</p>
    </div>
  );
}

export default ApiPost;
