import React, { useContext, useEffect, useRef, useState } from "react";
import { Select, MenuItem, Typography, Box } from "@mui/material";
import { ScreenSize } from "../../../pages/home/homeContext";
import useWindowDimensions from '../../../utils/windowDimension'
export default function UpNav() {
  const { maxWidth } = useContext(ScreenSize);
  const {width} = useWindowDimensions()
  const parentRef = useRef(null); // Ref for the parent element
  const [childWidth, setChildWidth] = useState(0);

  const calculateWidth = () => {
    if (parentRef.current) {
      const parentWidth = parentRef.current.clientWidth; // Parent width in px
      const percentWidth = (50 / 100) * parentWidth; // 50% of parent width
      const finalWidth = percentWidth + 20 - 5; // Add 20px to the calculated % width    
      setChildWidth(finalWidth / 2); // Update state with the new width
    }
  };

  // Recalculate width on mount and whenever the window resizes
  useEffect(() => {
    calculateWidth(); // Initial calculation
    window.addEventListener("resize", calculateWidth); // Recalculate on window resize

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", calculateWidth);
  }, []);

  const SideSymbol = () => {
    console.log(childWidth);
    
    return (
      <hr
        style={{
          background: "#EDEDED",
          border: "none",
          width: "30%",
          marginTop: "auto",
          height: "1.5px",
        }}
      />
    );
  };

  return (
    <div
      style={{
        height: "60px",
        width: "100%",
        border:"none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
       {width > 800 && <SideSymbol />} 
      
      <div
        ref={parentRef}
        style={{
          maxWidth,
         minWidth: width > 1140 ? maxWidth : "100%",
          width: "100%",
          background: "#FFFFFF",
          color: "#BEBEBE",
          fontSize: "16px",
          padding: "0 10px",
          fontWeight: "500",
          height: "100%",
          justifyContent: "space-between",
          display: "flex",
          alignItems: "center",
        }}
      >
        <LiftSide />
        <RightSide />
      </div>
      {width > 800 && <SideSymbol />} 
    </div>
  );
}

const Selector = ({ text, type }) => {
  const [selector, setSelector] = useState(
    text == "Currency" ? "USD" : text == "Compare" ? "2" : "EN"
  ); // Default selector
  const list = text == "Currency" ? ["USD"] : ["EN"];
  const handleChange = (event) => {
    setSelector(event.target.value);
  };

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Typography variant="body1" sx={{ color: "#6e6e6e" }}>
        {text}:
      </Typography>

      {text == "Compare" ? (
        <MenuItem
          value="2"
          sx={{
            fontSize: "15px",
            fontWeight: "bold",
            color: "#6e6e6e",
            color: "black",
            padding: "0",
            pointerEvents: "none",
          }}
        >
          2
        </MenuItem>
      ) : (
        <Select
          value={selector}
          onChange={handleChange}
          disableUnderline
          variant="standard" // Makes it simple like in your example
          sx={{ minWidth: 60, color: "#6e6e6e", fontWeight: "bold" }}
        >
          {list.map((task) => (
            <MenuItem value={task}>{task}</MenuItem>
          ))}
        </Select>
      )}
    </Box>
  );
};
const LiftSide = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        color: "#6e6e6e",
      }}
    >
      {["About Us", "Contacts", "Store Location", "Track Order", "Blog"].map(
        (task, index) => (
          <p key={index} style={{ cursor: "pointer" }}>
            {task}
          </p>
        )
      )}
    </div>
  );
};

const RightSide = () => {
  const Text = ({ text, value, index }) => {
    return (
      <div key={index}>
        <Selector text={text} />
      </div>
    );
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {[
        { text: "Compare", value: "2" },
        { text: "Currency", value: "USD" },
        { text: "Language", value: "EN" },
      ].map((task, index) => Text({ ...task, index }))}
    </div>
  );
};
