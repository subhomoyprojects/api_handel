import axios from "axios";
import React, { useState } from "react";

function Api1(props) {
  const [info, setInfo] = useState({ userId: "", id: "", title: "", body: "" });
  const apicall = (e) => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        // console.log(res.data.userId);
        // console.log(res.data.id);
        // console.log(res.data.title);
        // console.log(res.data.body);
        setInfo({
          userId: res.data.userId,
          id: res.data.id,
          title: res.data.title,
          body: res.data.body,
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("Api call over!");
      });
  };
  const { userId, id, title, body } = info;
  return (
    <div>
      <h1>Api Calling</h1>
      <input type="button" value="Fetch" onClick={apicall} />
      <ul>
        <li>UserId:{userId}</li>
        <li>Id:{id}</li>
        <li>Title:{title}</li>
        <li>Body:{body}</li>
      </ul>
    </div>
  );
}

export default Api1;
