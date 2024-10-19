import React from "react";
import {
  Box,
  Typography,
  Link,
  Grid,
  Button,
  TextField,
  Stack,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  RssFeed,
} from "@mui/icons-material";
import image from "../../utils/image";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#333",
        color: "white",
        display: "flex",
        width: "100%",
        justifyContent:'center',
        alignItems: "center",
        p: 4,
        paddingBottom:"2px",
        borderTop: "1px solid #444",
        position: "relative",
        clipPath:
          "polygon(8% 0, 9% 5%, 91% 5%, 92% 0, 100% 0, 100% 15%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0 0);",
      }}
    >
      <Stack >
      <Stack direction={"row"} gap={"50px"} >
        <Stack
          direction={"column"}
          gap={"20px"}
          sx={{ color: "white", width: "450px" }}
        >
          <Typography variant="h6" sx={{ color: "white", textAlign: "start" }}>
            Contact Us
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "white", textAlign: "start", width: "300px" }}
          >
            Hi, we are always open for cooperation and suggestions, contact us
            in one of the ways below:
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "white",
              gap: "20px",
              width: "100%",
            }}
          >
            <div style={{ color: "white", width: "250px" }}>
              <p style={{ color: "#9C9696", textAlign: "start",marginBottom:"5px" }}>Phone Number</p>
              <p style={{ color: "white", textAlign: "start" }}>
                {" "}
                098522-97907
              </p>
            </div>
            <div style={{ width: "250px" }}>
              <p style={{  color: "#9C9696", textAlign: "start" ,marginBottom:"5px"}}>
                Email ADDRESS
              </p>
              <p style={{ color: "white", textAlign: "start" }}>
                {" "}
                careers@utrouxsolutions.com
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "white",
              gap: "20px",
              width: "100%",
            }}
          >
            <div
              style={{
                width: "250px",
              }}
            >
              <p style={{  color: "#9C9696", textAlign: "start",marginBottom:"5px" }}>Our Location</p>
              <p style={{ color: "white", textAlign: "start" }}>
                102, Abhirami Rd, Ramanathapuram, Coimbatore, Tamil Nadu 641049
              </p>
            </div>
            <div
              style={{
                width: "250px",
              }}
            >
              <p style={{  color: "#9C9696", textAlign: "start",marginBottom:"5px" }}>
                Working Hours
              </p>
              <p style={{ color: "white", textAlign: "start" }}>
                Mon-Fri 10:00am - 6:00pm
              </p>
            </div>
          </div>
        </Stack>

        <Stack direction={"column"} gap={"12px"} sx={{ color: "#9C9696" }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ textAlign: "start", color: "white" }}
          >
            Information
          </Typography>
          <Link
            href="#"
            color="inherit"
            underline="hover"
            display="block"
            sx={{ textAlign: "start" }}
          >
            About Us
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="hover"
            display="block"
            sx={{ textAlign: "start" }}
          >
            Delivery Information
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="hover"
            display="block"
            sx={{ textAlign: "start" }}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="hover"
            display="block"
            sx={{ textAlign: "start" }}
          >
            Brands
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="hover"
            display="block"
            sx={{ textAlign: "start" }}
          >
            Contact Us
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="hover"
            display="block"
            sx={{ textAlign: "start" }}
          >
            Returns
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="hover"
            display="block"
            sx={{ textAlign: "start" }}
          >
            Site Map
          </Link>
        </Stack>

        <Stack direction={"column"} gap={"12px"} sx={{ color: "#9C9696" }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ textAlign: "start", color: "white" }}
          >
            My Account
          </Typography>
          <Link
            href="#"
            color="inherit"
            underline="hover"
            display="block"
            sx={{ textAlign: "start" }}
          >
            Store Location
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="hover"
            display="block"
            sx={{ textAlign: "start" }}
          >
            Order History
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="hover"
            display="block"
            sx={{ textAlign: "start" }}
          >
            Wish List
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="hover"
            display="block"
            sx={{ textAlign: "start" }}
          >
            Newsletter
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="hover"
            display="block"
            sx={{ textAlign: "start" }}
          >
            Special Offers
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="hover"
            display="block"
            sx={{ textAlign: "start" }}
          >
            Gift Certificates
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="hover"
            display="block"
            sx={{ textAlign: "start" }}
          >
            Affiliate
          </Link>
        </Stack>
        <Stack direction={"column"} gap={"15px"} sx={{ color: "#9C9696" }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ textAlign: "start", color: "white" }}
          >
            Newsletter
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ textAlign: "start", color: "#9C9696", width: "270px" }}
          >
            Enter your email address below to subscribe to our newsletter and
            keep up to date with discounts and special offers.
          </Typography>
          <Box display="flex" alignItems="center" gap={1}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="user@example.com"
              sx={{
                bgcolor: "#fff",
                borderRadius: 1,
                input: { color: "#000" },
              }}
            />
            <Button variant="contained" color="success">
              Subscribe
            </Button>
          </Box>

          <Box mt={2} display="flex" gap={1}>
            <Link href="#" >
              <Facebook sx={{color:"#1877F2"}} />
            </Link>
            <Link href="#" color="#1DA1F2">
              <Twitter />
            </Link>
            <Link href="#" color="#F56040">
              <Instagram />
            </Link>
            <Link href="#" color="#FF0000">
              <YouTube />
            </Link>
            <Link href="#" color="inherit">
              <RssFeed />
            </Link>
          </Box>
        </Stack>
      </Stack>
      <Box
        sx={{
          borderTop: "1px solid #444",
          marginTop:"10px",
          pt: 2,
          paddingLeft:"10px",
          paddingRight:"10px",
          textAlign: "center",
          display: "flex",
          height:"50px",
          background:"black",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Typography variant="body2" color="white" component="p" >
          Powered by React / Next.js — Designed by UTROUX Solutions
        </Typography>
        {/* <Box mt={{ xs: 2, md: 0 }}> */}
          <img
          style={{
            width: "80px",
            height: "30px",
          }}
            src={image.paypal}
            alt="Payment Methods"
          />
        {/* </Box> */}
      </Box>
      </Stack>
   

    </Box>
  );
};

export default Footer;

// import React from 'react';
// import { Box, Typography, Link, Grid, Button, TextField } from '@mui/material';
// import { Facebook, Twitter, Instagram, YouTube, RssFeed } from '@mui/icons-material';

// const Footer = () => {
//   return (
//     <Box
//       sx={{
//         backgroundColor: '#333',
//         color: '#fff',
//         p: 4,
//         borderTop: '1px solid #444',
//         position: "relative",
//         clipPath:"polygon(8% 0, 9% 5%, 91% 5%, 92% 0, 100% 0, 100% 15%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0 0);",
//       }}
//     >
//       <Grid container spacing={4}>
//         {/* Contact Us Section */}
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography variant="h6" gutterBottom>Contact Us</Typography>
//           <Typography variant="body2" gutterBottom>
//             Hi, we are always open for cooperation and suggestions, contact us in one of the ways below:
//           </Typography>
//           <Typography variant="body2">Phone Number: 098522-97907</Typography>
//           <Typography variant="body2">Email: careers@utrouxsolutions.com</Typography>
//           <Typography variant="body2">Location: 102, Abhirami Rd, Ramanathapuram, Coimbatore, Tamil Nadu 641049</Typography>
//           <Typography variant="body2">Working Hours: Mon-Fri 10:00am - 6:00pm</Typography>
//         </Grid>

//         <Grid item xs={12} sm={6} md={3}>
//           <Typography variant="h6" gutterBottom>Information</Typography>
//           <Link href="#" color="inherit" underline="hover" display="block">About Us</Link>
//           <Link href="#" color="inherit" underline="hover" display="block">Delivery Information</Link>
//           <Link href="#" color="inherit" underline="hover" display="block">Privacy Policy</Link>
//           <Link href="#" color="inherit" underline="hover" display="block">Brands</Link>
//           <Link href="#" color="inherit" underline="hover" display="block">Contact Us</Link>
//           <Link href="#" color="inherit" underline="hover" display="block">Returns</Link>
//           <Link href="#" color="inherit" underline="hover" display="block">Site Map</Link>
//         </Grid>

//         <Grid item xs={12} sm={6} md={3}>
//           <Typography variant="h6" gutterBottom>My Account</Typography>
//           <Link href="#" color="inherit" underline="hover" display="block">Store Location</Link>
//           <Link href="#" color="inherit" underline="hover" display="block">Order History</Link>
//           <Link href="#" color="inherit" underline="hover" display="block">Wish List</Link>
//           <Link href="#" color="inherit" underline="hover" display="block">Newsletter</Link>
//           <Link href="#" color="inherit" underline="hover" display="block">Special Offers</Link>
//           <Link href="#" color="inherit" underline="hover" display="block">Gift Certificates</Link>
//           <Link href="#" color="inherit" underline="hover" display="block">Affiliate</Link>
//         </Grid>

//         <Grid item xs={12} sm={6} md={3}>
//           <Typography variant="h6" gutterBottom>Newsletter</Typography>
//           <Typography variant="body2" gutterBottom>
//             Enter your email address below to subscribe to our newsletter and keep up to date with discounts and special offers.
//           </Typography>
//           <Box display="flex" alignItems="center" gap={1}>
//             <TextField
//               variant="outlined"
//               size="small"
//               placeholder="user@example.com"
//               sx={{
//                 bgcolor: '#fff',
//                 borderRadius: 1,
//                 input: { color: '#000' }
//               }}
//             />
//             <Button variant="contained" color="success">Subscribe</Button>
//           </Box>

//           {/* Social Icons */}
//           <Box mt={2} display="flex" gap={1}>
//             <Link href="#" color="inherit"><Facebook /></Link>
//             <Link href="#" color="inherit"><Twitter /></Link>
//             <Link href="#" color="inherit"><Instagram /></Link>
//             <Link href="#" color="inherit"><YouTube /></Link>
//             <Link href="#" color="inherit"><RssFeed /></Link>
//           </Box>
//         </Grid>
//       </Grid>

//       {/* Bottom Section */}
//       <Box
//         sx={{
//           borderTop: '1px solid #444',
//           mt: 4,
//           pt: 2,
//           textAlign: 'center',
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           flexWrap: 'wrap',
//         }}
//       >
//         <Typography variant="body2" color="textSecondary" component="p">
//           Powered by React / Next.js — Designed by UTROUX Solutions
//         </Typography>
//         <Box mt={{ xs: 2, md: 0 }}>
//           {/* Payment Icons */}
//           <img src="https://dummyimage.com/150x25/000/fff&text=Payment+Icons" alt="Payment Methods" />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Footer;
