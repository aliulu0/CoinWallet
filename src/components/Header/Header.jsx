import React from "react";
import "./header.css";
import { BiCoinStack } from "react-icons/bi";
import { useCoin } from "../../context/coinContext";

function Header() {
  const { searchCoinText, setSearchCoinText } = useCoin();

  return (
    <div className="header p-2">
      <h2 className="head">
        <BiCoinStack /> Coin Wallet
      </h2>
      <input
        className="search p-3"
        type="text"
        placeholder="Search coin..."
        onChange={(e) => setSearchCoinText(e.target.value)}
        value={searchCoinText}
      />
    </div>
  );
}
export default Header;
