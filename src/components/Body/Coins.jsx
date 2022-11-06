import React, { useState, useEffect } from "react";
import axios from "axios";
import CoinItem from "./CoinItem";
import Table from "react-bootstrap/Table";
import "./coins.css";

function Coins() {
  const [coinList, setCoinList] = useState([]);
  async function getCoins() {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc%2C%20market_cap_asc&per_page=20&page=1&sparkline=true&price_change_percentage=24h%2C30d"
      );
      setCoinList(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getCoins();
    console.log(coinList);
  }, []);

  return (
    <div className="container">
      <Table striped hover variant="light">
        <thead>
          <tr className="coin-heading">
            <th className="rank">#</th>
            <th className="coin-name">Coin</th>
            <th>Price</th>
            <th className="coin-24h">24h</th>
            <th className="hide-head coin-30d">30d</th>
            <th className="hide-head">Volume</th>
            <th className="hide-head">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coinList.map((coin) => (
            <CoinItem key={coin.id} coins={coin} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default Coins;
