import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ApiPost1.css";
import Card from "./Card";
// swiper
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

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
      <div className="wrapper">
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
      </div>
      <div className="wrapper">
        <h1>👍 Welcome to Slider Layout 👍</h1>
        <div className="container">
          <Swiper
            modules={[Navigation]}
            slidesPerView={4}
            navigation
            loop
            grabCursor
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1025: {
                slidesPerView: 4,
              },
            }}
          >
            {info.map((data, index) => {
              return (
                <>
                  <SwiperSlide
                    key={index++}
                    className="swiper slider-controller"
                  >
                    <Card
                      key={data.id}
                      email={data.email}
                      firstName={data.first_name}
                      lastName={data.last_name}
                      imgSrc={data.avatar}
                    />
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </div>
    </main>
  );
}

export default ApiPost1;
