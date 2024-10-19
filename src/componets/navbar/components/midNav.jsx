import React, { useContext, useEffect, useRef, useState } from "react";
import { Select, MenuItem, Typography, Box } from "@mui/material";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Search, DirectionsCar } from "@mui/icons-material";
import { ScreenSize } from "../../../pages/home/homeContext";
import { Badge, Stack } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import image from "../../../utils/image";
import { useNavigate } from "react-router-dom";
export default function MidNav() {
  const { maxWidth, userDetails } = useContext(ScreenSize);
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

  return (
    <div
      style={{
        height: "100px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth, // maxWidth
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
    </div>
  );
}

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
      <img src={image.logo} alt="" style={{ height: "50px" }} />
      <VehicleSearchBar />
    </div>
  );
};

const VehicleSearchBar = () => {
  const { cssAndValue } = useContext(ScreenSize);
  const [vehicle, setVehicle] = useState("");

  const handleChange = (event) => {
    setVehicle(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        border: "none",
        borderRadius: "5px",
        overflow: "hidden",
      }}
    >
      {/* Dropdown with Icon */}
      <Select
        value={vehicle}
        onChange={handleChange}
        displayEmpty
        startAdornment={
          <DirectionsCar sx={{ color: "#000", marginLeft: "8px" }} />
        }
        sx={{
          backgroundColor: "#FFD700",
          padding: "0 10px",
          ...cssAndValue.VehicleSearchBar.firstChild,
          fontWeight: "bold",
        }}
      >
        <MenuItem value="" disabled>
          Select Vehicle
        </MenuItem>
        <MenuItem value="car">Car</MenuItem>
        <MenuItem value="bike">Bike</MenuItem>
        <MenuItem value="truck">Truck</MenuItem>
      </Select>

      <TextField
        variant="outlined"
        placeholder="Enter Keyword or Part Number"
        sx={{
          // ...cssAndValue.VehicleSearchBar.secChild,
          width:"300px",
          border: "none",
          "& .MuiOutlinedInput-root": {
            border: "none",
            borderRadius: 0,
            paddingLeft: 1,
            backgroundColor: "#f5f5f5",
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <img src={image.search} alt="" />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

const RightSide = () => {
  const { cssAndValue, userDetails } = useContext(ScreenSize);
  const router = useNavigate();
  const { VehicleSearchBar } = cssAndValue;

  return (
    <Stack direction="row" spacing={3} alignItems="center">
      <IconButton color="inherit">
        <Badge badgeContent={0} color="success" overlap="rectangular">
          <FavoriteBorderIcon fontSize="large" />
        </Badge>
      </IconButton>

      <Stack direction="column" alignItems="center">
        <Typography
          variant="div"
          sx={{ cursor: "pointer", color: "black", marginRight: "auto" }}
          onClick={async () => {
            fetch("/api/logout")
              .then((res) => res.json())
              .then((data) => {
                if (data.status == "success") router("/signin");
              });
          }}
        >
          Hello, Log Out
        </Typography>
        <Typography variant="h6" fontWeight="bold" sx={{ color: "black" }}>
          {/* My Account */}
          {userDetails.name.length > 8 ?  `${userDetails.name.slice(0, 7)}...` : userDetails.name }
        </Typography>
      </Stack>

      <Stack direction={"row"} alignItems="center" gap={"10px"}>
        <IconButton color="inherit">
          <Badge
            badgeContent={userDetails.cart.length}
            color="success"
            overlap="rectangular"
          >
            <ShoppingCartIcon fontSize="large" />
          </Badge>
        </IconButton>
        <Stack>
          <Typography variant="h6" fontWeight="bold">
            Shopping cart
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            {VehicleSearchBar.shoppingCartTotal.symbol}{" "}
            {userDetails.cart.length > 0
              ? userDetails.cart.reduce((total, item) => {
                  return total + item.price;
                }, 0)
              : 0}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
