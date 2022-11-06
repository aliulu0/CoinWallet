import React from "react";
import "./header.css";
import { BiCoinStack } from "react-icons/bi";
import { useCoin } from "../../context/coinContext";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  const { searchCoinText, setSearchCoinText } = useCoin();

  return (
    <div className="header p-2">
      <LinkContainer to="/">
      <h2 className="head">
        <BiCoinStack /> Coin Wallet
      </h2>
      </LinkContainer>
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
