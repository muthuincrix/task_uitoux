import React from "react";
import { useContext } from "react";
import { ScreenSize } from "../../pages/home/homeContext";
import { Typography, Stack } from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";
import image from "../../utils/image";
import './style.css'


export default function ProductSpecial() {
  const { product, cssAndValue } = useContext(ScreenSize);
  const list = [
    {
      name: "Top Rated Products",
      productList: [...product.slice(0, 3)],
    },
    {
      name: "Specials Products",
      productList: [...product.slice(3, 6)],
    },
    {
      name: "Bestsellers",
      productList: [...product.slice(6, 9)],
    },
  ];

  const tagList = [
    {
      name: "Electronics",
      url: image.delivery,
      subTitle: "For orders from $50",
    },
    {
      name: "Support 24/7",
      url: image.support,
      subTitle: "call us anytime",
    },
    {
      name: "100% Safety",
      url: image.safety,
      subTitle: "only secure payments",
    },
    {
      name: "Hot Offers",
      url: image.offer,
      subTitle: "Discounts up to 90%",
    },
  ];
  return (
    <div style={{ color: "black", marginTop: "30px" }}>
      <div style={{ display: "flex", gap: "20px" }} class="special-list">
        {list.map((item, index) => (
          <div key={index}>
            <h3
              style={{ borderBottom: "2px solid gray", marginBottom: "10px" }}
            >
              {" "}
              {item.name}
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-around",
                gap: "20px",
              }}
            >
              {item.productList.map((product, index) => (
                <ProductCard {...product} {...cssAndValue.specialImage} product={product} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          borderTop: "1px solid gray",
          marginTop:"50px",
          width:"100%",
          display:"flex",
          alignContent:'center',
          justifyContent:'center'
        }}
      >
        {tagList.map((tag) => 
           { return ( 
            <div style={{ display: "flex", gap: "10px", width:'350px',padding:'15px',justifyContent:"center",alignItems:"center", height:'100px',color:'black' }}>
            <img src={tag.url} style={{width:'50px'}} alt=""  />
            <div >
              <h1
                style={{ color: "black", fontSize: "18px", fontWeight: "bold" }}
              >
                {tag.name}
              </h1>
              <p style={{ color: "gray", fontSize: "12px" }}>{tag.subTitle}</p>
            </div>
          </div>)
          }
        )}
      </div>
    </div>
  );
}

const ProductCard = ({
  url,
  product_name,
  price,
  reviews,
  rating,
  width,
  unit,
  flexWrap,
  product
}) => {
  const { addProductCart } = useContext(ScreenSize);
  return (
    <Stack
    className="special-layer"
      sx={{
        background: "#FFFFFF",
        display: "flex",
        width:"350px",
        height: "150px",
        flexDirection: "row",
        padding: "10px",
        color: "black",
        position: "relative",
      }}
    >
      <img
        src={url}
        style={{ objectFit: "cover", maxWidth: "150px", maxHeight: "150px" }}
        alt=""
      />
      <Stack sx={{ width }}>
        <h6 style={{ textAlign: "start" }}>{product_name}</h6>
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
          <img src={image.cart} alt="" style={{cursor:"pointer"}} onClick={() => addProductCart(product) } />
        </div>
      </Stack>
    </Stack>
  );
};
