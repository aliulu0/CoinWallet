import React from "react";
import LinkContainer from "react-router-bootstrap/LinkContainer";
import "./coinItem.css";
import CoinDetail from "./CoinDetail";
function App({ coins }) {


  return (
        <tbody>
          {coins.map((coin) => (
            <LinkContainer
              to={`/coins/${coin.id}`}
              element={<CoinDetail />}
              key={coin.id}
            >
              <tr className="coin-row">
                <td>{coin.market_cap_rank}</td>
                <td className="coin-img-symbol">
                  <img src={coin.image} alt="" />
                  <p>{coin.name}</p>
                  <p className="coin-symbol mb-0">{coin.symbol.toUpperCase()}</p>
                </td>
                <td>${parseFloat(coin.current_price).toFixed(2)}</td>
                <td
                  style={{
                    color: coin.price_change_percentage_24h > 0 ? "green" : "red"
                  }}
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td className="hide-info">{coin.total_volume.toLocaleString("en-US")}</td>
                <td className="hide-info">{coin.market_cap.toLocaleString("en-US")}</td>
              </tr>
            </LinkContainer>

          ))}
        </tbody>
  );
}
export default App;
