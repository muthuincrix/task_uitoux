import React from "react";
import UpNav from "./components/upNav.jsx";
import BotNav from "./components/botNav";
import MidNav from "./components/midNav.jsx";

export default function Navbar() {
  return (
    <div>
      <UpNav />
      <MidNav />
      <BotNav />
    </div>
  );
}
