import { createContext, useContext, useState } from "react";
import axios from "axios";
const CoinContext = createContext();

const CoinProvider = ({ children }) => {
  const [coinList, setCoinList] = useState([]);
  const [searchCoinText, setSearchCoinText] = useState("");
  const [loading, setLoading] = useState(true)

  
  async function getCoins() {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false
        `
      );
      setCoinList(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }
  function searchCoin(data) {
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchCoinText) ||
        item.symbol.toLowerCase().includes(searchCoinText)
    );
  }
    const values = {
    coinList,
    getCoins,
    loading,
    searchCoinText,
    setSearchCoinText,
    searchCoin,

  };
  return <CoinContext.Provider value={values}>{children}</CoinContext.Provider>;
};

export const useCoin = () => useContext(CoinContext);
export default CoinProvider;
