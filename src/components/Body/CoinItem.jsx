import React from "react";
import "./coinItem.css";
function App({ coins }) {
  return (
    <tr className="coin-row">
      <td>{coins.market_cap_rank}</td>
      <td className="coin-img-symbol">
        <img src={coins.image} alt="" />
        <p>{coins.name}</p>
        <p className="coin-symbol mb-0">{coins.symbol.toUpperCase()}</p>
      </td>
      <td>${coins.current_price.toLocaleString()}</td>
      <td
        style={{
          color: coins.price_change_percentage_24h > 0 ? "green" : "red"
        }}
      >
        {coins.price_change_percentage_24h.toFixed(2)}%
      </td>
      <td
        className="hide-info"
        style={{
          color: coins.price_change_percentage_30 > 0 ? "green" : "red"
        }}
      >
        {coins.price_change_percentage_30d_in_currency.toFixed(2)}%
      </td>
      <td className="hide-info">{coins.total_volume.toLocaleString()}</td>
      <td className="hide-info">{coins.market_cap.toLocaleString()}</td>
    </tr>
  );
}
export default App;
