import React, { useEffect } from "react";
import CoinItem from "./CoinItem";
import Table from "react-bootstrap/Table";
import "./coins.css";
import { useCoin } from "../../context/coinContext";
import { useUser } from "../../context/userContext";

function Coins() {
  const { getCoins, coinList, searchCoin, loading } = useCoin();
  const { theme } = useUser();

  useEffect(() => {
    getCoins()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);




  return (
    <div className="container">
      <Table variant={`${theme === "dark" ? "bg-dark text-light" : "light"}`}>
        <thead>
          <tr className="coin-heading ">
            <th className="rank">#</th>
            <th className="coin-name">Coin</th>
            <th>Price</th>
            <th className="coin-24h">24h</th>
            <th className="hide-head">Volume</th>
            <th className="hide-head">Market Cap</th>
          </tr>
        </thead>
        <CoinItem coins={searchCoin(coinList)} />
      </Table>
      {loading ? (<p>loading....</p>) : "" }
    </div>

  );
}
export default Coins;
