import React, {useState} from "react";
import "./header.css";
import { BiCoinStack } from "react-icons/bi";
import { FaSun, FaMoon, FaWallet } from "react-icons/fa";
import { useCoin } from "../../context/coinContext";
import { useUser } from "../../context/userContext";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, NavDropdown, Offcanvas} from "react-bootstrap";
import WalletList from "../Body/WalletList";

function Header(props) {
  const [show, setShow] = useState(false)
  const { searchCoinText, setSearchCoinText } = useCoin();
  const {theme, setTheme,money} = useUser();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar className="header p-2" variant={theme} bg={theme} expand="lg  ">
      <LinkContainer to="/">
      <h2 className="head">
        <BiCoinStack /> Coin Wallet
      </h2>
      </LinkContainer>
      <NavDropdown
      id={`nav-dropdown-${theme}-example`}
      title={<FaWallet size={'24'}/>}
      menuVariant={theme}
      className="pt-0 pb-0 p-3"
      >
      <NavDropdown.Item>$ {money.toLocaleString()}</NavDropdown.Item>
      <NavDropdown.Item onClick={handleShow}>
        My Coins
      </NavDropdown.Item>
      <Offcanvas className={`${theme === "dark" ? "text-light bg-dark": ""}`} scroll show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Wallet</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <button className={`btn ${theme === "dark" ? "btn-light": "btn-primary"} m-2`}>Total: $ 100.000,00</button>
          <button className={`btn ${theme === "dark" ? "btn-light": "btn-primary"} `}>Current : $ {money.toLocaleString()}</button>
          <WalletList items={props.coins}/>
        </Offcanvas.Body>
      </Offcanvas>
      </NavDropdown>
      <input
        className="search p-3"
        type="text"
        placeholder="Search coin..."
        onChange={(e) => setSearchCoinText(e.target.value)}
        value={searchCoinText}
      />
      {theme === "light" ? <FaMoon className="icon" onClick={() => setTheme("dark")}/> : <FaSun className="icon" onClick={() => setTheme("light") }/>}     
    </Navbar>
  );
}
export default Header;
