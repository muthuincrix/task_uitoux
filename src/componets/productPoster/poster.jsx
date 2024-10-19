import React from "react";
import "./style.css";

const MotorOilBanner = () => {
  const poster = [
    {
      h: "MOTOR OILS",
      p1: "Synthetic motor oil with free shipping",
      p2: "Friction free life guaranteed",
      btn: "Shop Now",
      className: "banner-container1",
    },
    {
        h: "SAVE UP TO $40",
        p1: "Luxurious interior part for real aesthetes",
        p2: "Leather,fabric,ivory and more",
        btn: "Shop Now",
        className: "banner-container2"
      },
  ];

  return (
    <div style={{display:'flex',gap:'15px',marginTop:'30px'}}>
      {poster.map((item, index) => (
        <div key={index} className={item.className}>
          <div className="banner-overlay"></div> 
          <div className="banner-content ">
            <h1 className="textPoster">{item.h}</h1>
            <p className="textP" >{item.p1}</p>
            <p className="textP">{item.p2}</p>
            <button className="shop-now-button">{item.btn}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MotorOilBanner;
