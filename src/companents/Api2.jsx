import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Api2() {
  const [info, setInfo] = useState({ unm: "", em: "", city: "", lat: "" });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data[2]);
        setInfo({
          unm: res.data[2].username,
          em: res.data[2].email,
          city: res.data[2].address.city,
          lat: res.data[2].address.geo.lat,
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("Api call is over!");
      });
  }, []);

  return (
    <>
      <h3>API CALLING </h3>
      <ol>
        <li>USERNAME : {info.unm}</li>
        <li>EMAIL : {info.em}</li>
        <li>CITY : {info.city}</li>
        <li>LAT : {info.lat}</li>
      </ol>
    </>
  );
}
