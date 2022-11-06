import React, { useEffect } from "react";
import CoinItem from "./CoinItem";
import Table from "react-bootstrap/Table";
import "./coins.css";
import { useCoin } from "../../context/coinContext";

function Coins() {
  const { getCoins, coinList, searchCoin } = useCoin();

  useEffect(() => {
    getCoins();
    console.log(coinList);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <Table striped hover variant="light">
        <thead>
          <tr className="coin-heading ">
            <th className="rank">#</th>
            <th className="coin-name">Coin</th>
            <th>Price</th>
            <th className="coin-24h">24h</th>
            <th className="hide-head coin-30d">30d</th>
            <th className="hide-head">Volume</th>
            <th className="hide-head">Market Cap</th>
          </tr>
        </thead>
        <CoinItem coins={searchCoin(coinList)} />
      </Table>
    </div>
  );
}
export default Coins;
