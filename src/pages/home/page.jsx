import React from "react";
import Slider from "../../componets/slider/slider.jsx";
import { Box } from "@mui/material";
import image from "../../utils/image.js";
import { useContext } from "react";
import { ScreenSize } from "./homeContext.js";
import ProductList from "../../componets/productList/productList.jsx";
import ProductPoster from '../../componets/productPoster/poster.jsx'
import ProductSpecial from '../../componets/productSpecial/productSpecial.jsx'
import "./image.css";
export default function Page() {
  return (
    <div
      style={{
        width: "100%",
        background: "#FAFAFA",
      }}
    >
      <Slider />
      <LogoGrid />
      <ProductList /> 
      <ProductPoster />
      <ProductSpecial />
    </div>
  );
}

const list = [
  { name: "AIMPARTS", src: image.brand_1 },
  { name: "WINDENGINE", src: image.brand_2 },
  { name: "TURBOELECTRIC", src: image.brand_3 },
  { name: "STARTONE", src: image.brand_4 },
  { name: "BRANDIX", src: image.brand_5 },
  { name: "ABS-BRAND", src: image.brand_6 },
  { name: "GREATCIRCLE", src: image.brand_7 },
  { name: "JUSTROMB", src: image.brand_8 },
  { name: "FASTWHEELS", src: image.brand_9 },
  { name: "STROYKA-X", src: image.brand_10 },
  { name: "MISSION-51", src: image.brand_11 },
  { name: "FUELCORP", src: image.brand_12 },
  { name: "REDGATE", src: image.brand_13 },
  { name: "BLOCKS", src: image.brand_14 },
  { name: "BLACKBOX", src: image.brand_15 },
  { name: "SQUAREGARAGE", src: image.brand_16 },
];

function LogoGrid() {
  const { cssAndValue } = useContext(ScreenSize);
  return (
    <div className="logo-grid" style={{...cssAndValue.imageList}}>
      {list.map((logo, index) => (
        <div
          className="logo-item"
          style={{
            border: "1px solid gray",
          }}
          key={index}
        >
          <img
            src={logo.src}
            style={{
              width: "100px",
              filter:
                "grayscale(100%) brightness(1.0)" 
            }}
            className="logo-image"
          />
          <p>{logo.name}</p>
        </div>
      ))}
    </div>
  );
}

