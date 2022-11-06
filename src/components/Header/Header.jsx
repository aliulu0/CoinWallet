import React from "react";
import "./header.css";
import { BiCoinStack } from "react-icons/bi";
import { FaSun, FaMoon } from "react-icons/fa";
import { useCoin } from "../../context/coinContext";
import { useUser } from "../../context/userContext";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  const { searchCoinText, setSearchCoinText } = useCoin();
  const {theme, setTheme} = useUser();

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
      {theme === "light" ? <FaMoon className="icon" onClick={() => setTheme("dark")}/> : <FaSun className="icon" onClick={() => setTheme("light") }/>}
      
     
    </div>
  );
}
export default Header;
