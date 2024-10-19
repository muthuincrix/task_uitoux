import image from "../../utils/image";
import React from "react";
import Slider from "react-slick";
import { Box, Grid, Typography, Button, Stack } from "@mui/material";
import { useContext } from "react";
import {ScreenSize} from '../../pages/home/homeContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
const PromotionSlider = () => {
  const { cssAndValue } = useContext(ScreenSize);
  const sliderSettings = {
    dots: true,
    dotColors: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2, // Show 2 items on medium screens
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1, // Show 1 item on small screens
          slidesToScroll: 1,
        },
      },
    ],
  };
  const list = [
    {
      id: 1,
      discount: "30% OFF",
      image: image.slider1,
      title: "When Buying Parts With Installation",
      description: "Installation of parts in the services of our partners.",
    },
    {
      id: 2,
      discount: "20% OFF",
      image: image.slider1,
      title: "When Buying Parts With Installation",
      description: "Installation of parts in the services of our partners.",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#f9f9f9",padding:3, borderRadius: 2,width:"100%" }}>
      <Slider {...sliderSettings}>
        {list.map((item, index) => (
          <Stack key={index} position={"relative"}   sx={{width:'100%' }}>
            <img src={image.slider1} alt="" style={{...cssAndValue.slider.image}} />
            <Stack position={"absolute"} direction={'column'} paddingLeft={'20px'} gap={"15px"} top={100}  sx={{color:"black",paddingLeft:'5px'}}>
            <h1 style={{textAlign:"start",width:"300px",background:'#FFD700'}}>{` ${item.discount}`}</h1>
            <h4 style={{ textAlign:"start",background: "#ddd", background:"none" }}>{item.title}</h4>
            <h6 style={{textAlign:"start", background: "#ddd", background:"none" }}>
              {item.description}
            </h6>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#00c853",
                color: "#fff",
                width:"200px",
                height:"50px"
              }}
            >
              Shop Now
            </Button>
            </Stack>
          </Stack>
        ))}
      </Slider>
    </Box>
  );
};

export default PromotionSlider;