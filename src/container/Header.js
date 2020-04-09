import React from "react";
import Logo from "../image/interview.svg";
function Header() {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row",
        flex: 1,
        alignItems: "center",
      }}
    >
      <img
        src={Logo}
        alt="Interview Logo"
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "32px",
          backgroundColor: "yellow",
          marginRight: "16px",
        }}
      ></img>
      <h2>Faking Interview</h2>
    </div>
  );
}

export default Header;
