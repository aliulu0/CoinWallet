import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Coins from "./Coins";
import "./app.css";
import { useCoin } from "../../context/coinContext";
function App() {
  const {coinList} = useCoin();
  return (
    <div className="App">
      <Header coins={coinList} />
      <div>
        <Coins />
      </div>
      <Footer />
    </div>
  );
}
export default App;
