import React, { useEffect, useState } from "react";
import HomePage from "./page";
import Navbar from "../../componets/navbar/navbar";
import { ScreenSize } from "./homeContext";
import useWindowDimensions from "../../utils/windowDimension";
import Footer from "../../componets/footer/footer";
import ProductList from "../../utils/productList";
import { useNavigate } from "react-router-dom";
import Notification from "../../utils/Alert";
export default function Home() {
  const maxWidth = "1180px";
  const { width } = useWindowDimensions();
  const router = useNavigate();
  const [userDetails, setUser] = useState({
    name: "",
    email: "",
    cart: [],
  });
  const [isLoad, setLoad] = useState(false);
  const [product, setproduct] = useState(ProductList);
  const [severity, setSeverity] = useState("");
  const [message, setMessage] = useState("");
  const [notificate, setNotification] = useState(false);
  const [cssAndValue, setCssAndValue] = useState({
    VehicleSearchBar: {
      firstChild: {
        width: "200px",
      },
      secChild: {
        width: "100px",
      },
      shoppingCartTotal: {
        value: 0,
        cartCount: 10,
        symbol: "₹",
      },
    },
    slider: {
      image: {
        width: "100%",
      },
    },
    imageList: {
      gridTemplateColumns: "repeat(8, minmax(150px, 1fr))",
    },
    specialImage: {
      width: "100px",
    },
  });

  const controlNotification = (status, message) => {
    setMessage(message);
    setSeverity(status);
    setNotification(true);
  };

  const addProductCart = async (product) =>{
    await fetch("/api/add-to-cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product,
      }),
    })
     .then((res) => res.json())
     .then(async (data) => {
        if (data.status == "success") {
          await setUser((preValue) => {
            let user = preValue;
            user.cart.push(product);
            return user;
          });
          controlNotification(data.status, data.message);
        } else {
          controlNotification(data.status, data.message);
        }
      });
  };


  useEffect(() => {
    const getUserData = async () => {
      await fetch("/api/get-user", {
        method: "GET",
      })
        .then((response) => response.json())
        .then(async (data) => {
          if (data.status == "success") {
            await setUser((preValue) => {
              let user = preValue;
              user.name = data.data.name;
              user.email = data.data.email;
              user.cart = data.data.cart;
              setLoad(true);
              return user;
            });
          }
        });
    };
    getUserData();
  }, []);

  useEffect(() => {
    fetch("/api/isValid", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // controlNotification(data.status,data.message)
        if (data.status == "error") {
          router("/signin");
        }
      });

    if (width < 1000)
      setCssAndValue((preValue) => {
        let tempValue = { ...preValue };
        tempValue.VehicleSearchBar.secChild.width = "150px";
        return tempValue;
      });
    else
      setCssAndValue((preValue) => {
        let tempValue = { ...preValue };
        tempValue.VehicleSearchBar.secChild.width = "500px";
        return tempValue;
      });
    if (width > 1223)
      setCssAndValue((preValue) => {
        let tempValue = { ...preValue };
        tempValue.imageList.gridTemplateColumns =
          "repeat(5, minmax(150px, 1fr))";
        return tempValue;
      });
    if (width < 1661)
      setCssAndValue((preValue) => {
        let tempValue = { ...preValue };
        tempValue.specialImage.width = "250px";
        return tempValue;
      });
    else
      setCssAndValue((preValue) => {
        let tempValue = { ...preValue };
        tempValue.specialImage.width = "300px";
        return tempValue;
      });
  }, [width]);

  return (
    isLoad && (
      <ScreenSize.Provider
        value={{ maxWidth, cssAndValue, product, userDetails,addProductCart }}
      >
        <div
          style={{
            color: "white",
            height: "100vh",
          }}
        >
          <Notification
            setNotification={setNotification}
            notificate={notificate}
            message={message}
            severity={severity}
          />
          <Navbar />
          <div
            style={{
              background: "#FAFAFA",
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "30px",
            }}
          >
            <div
              style={{
                maxWidth,
                width: "100%",
              }}
            >
              <HomePage />
            </div>
          </div>
          <Footer />
        </div>
      </ScreenSize.Provider>
    )
  );
}
