import React from "react";
import "./header.css";
import { BiCoinStack } from "react-icons/bi";
function Header() {
  return (
    <div className="header p-2">
      <h2 className="head">
        <BiCoinStack /> Coin Wallet
      </h2>
      <input className="search p-3" type="text" placeholder="Search coin..." />
    </div>
  );
}
export default Header;
