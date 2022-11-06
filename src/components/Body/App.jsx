import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Coins from "./Coins";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Coins />
      </div>
      <Footer />
    </div>
  );
}
export default App;
