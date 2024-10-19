import React, { useState } from "react";
import { Typography, Stack } from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";
import image from "../../utils/image";
import { useContext } from "react";
import { ScreenSize } from "../../pages/home/homeContext";
const Cart = image.cart;
export default function ProductList() {
  const [showAll,setShow ] = useState(false)
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "black",
          height: "50px",
          borderBottom: "1px solid gray",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <h3>Feature Products</h3>
        <RightSide setShow={setShow} showAll={showAll} />
      </div>

      <ProductSliderList showAll={showAll} />
    </div>
  );
}

const RightSide = ({setShow,showAll}) => {
  return (
    <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
      <div onClick={() => setShow(!showAll)} style={{paddingTop:"10px"}}  >
        <AngleBnt
          text={"All"}
          angle={"-25deg"}
          width={"55px"}
          backgroundColor={"black"}
          fontSize={"25px"}
          right={"15px"}
        />
      </div>

      <p style={{ fontSize: "25px", cursor: "pointer" }}>Power Tools</p>
      <p style={{ fontSize: "25px", cursor: "pointer" }}>Hand Tools</p>
      <p style={{ fontSize: "25px", cursor: "pointer" }}>Plumbing</p>

      <div style={{ display: "flex", gap: "5px" }}>
        <AngleBnt
          text={"<"}
          angle={"-25deg"}
          width={"55px"}
          backgroundColor={"#00D58E"}
          fontSize={"25px"}
          right={"20px"}
        />
        <AngleBnt
          text={">"}
          angle={"-25deg"}
          width={"55px"}
          backgroundColor={"#00D58E"}
          fontSize={"25px"}
          right={"18px"}
        />
      </div>
    </div>
  );
};

const AngleBnt = ({ text, angle, width, backgroundColor, fontSize, right }) => {
  return (
    <div
      style={{
        backgroundColor,
        color: "white",
        cursor: "pointer",
        transform: `skew(${angle})`,
        width,
        position: "relative",
        padding: "20px 20px",
        height:'10px',
        borderRadius: "8px",
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize,
          position: "absolute",
          top: "2px",
          right,
        }}
      >
        {text}
      </div>
    </div>
  );
};

const ProductCard = ({
  url,
  tag,
  product_name,
  price,
  reviews,
  unit,
  rating,
  product,

}) => {
  const { addProductCart } = useContext(ScreenSize);
  return (
    <Stack
      sx={{
        width: "250px",
        background: "#FFFFFF",
        padding: "10px",
        color: "black",
        position: "relative",
      }}
    >
      <img
        src={url}
        style={{ objectFit: "cover", maxWidth: "330px", maxHeight: "330px" }}
        alt=""
      />
      <Stack>
        <h4 style={{ textAlign: "start",fontSize:"15px" }}>{product_name}</h4>
        <div style={{ display: "flex", marginBottom: 8, marginTop: "10px" }}>
          {Array.from({ length: 5 }).map((_, index) =>
            index < rating ? (
              <Star key={index} style={{ color: "#FFC107", fontSize: 16 }} />
            ) : (
              <StarBorder
                key={index}
                style={{ color: "#FFC107", fontSize: 16 }}
              />
            )
          )}
          <Typography variant="body2" style={{ marginLeft: 4 }}>
            {reviews}
          </Typography>
        </div>
      </Stack>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          padding: "10px",
        }}
      >
        <div></div>
        {/* {tag == true ? (
          <AngleBnt
            text={"Hot"}
            angle={"-25deg"}
            width={"5px"}
            backgroundColor={"#5E48A5"}
            fontSize={"25px"}
            right={"8px"}
          />
        ) : (
          <div></div>
        )} */}
        <img
          src={image.quickView}
          style={{ width: "30px", height: "30px" }}
          alt=""
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "auto",
        }}
      >
        <p style={{ fontWeight: "bold", fontSize: "25px", color: "black" }}>
          {unit} {price}
        </p>
        <img
          src={image.cart}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => addProductCart(product)}
        />
      </div>
    </Stack>
  );
};

const ProductSliderList = ({showAll}) => {
  const { product } = useContext(ScreenSize);
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{ width: "95%", display: "flex", gap: "20px", flexWrap: "wrap" }}
      >
        {product.map(
          (product, index) =>
            showAll ?  <ProductCard {...product} product={product} /> : index < 4 && <ProductCard {...product} product={product} />
        )}
      </div>
    </Stack>
  );
};
