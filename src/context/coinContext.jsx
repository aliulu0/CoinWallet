import { createContext, useContext, useState } from "react";
import axios from "axios";
const CoinContext = createContext();

const CoinProvider = ({ children }) => {
  const [coinList, setCoinList] = useState([]);
  const [searchCoinText, setSearchCoinText] = useState("");
  const [page, setPage] = useState(50);


  async function getCoins() {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc%2C%20market_cap_asc&per_page=${page}&page=1&sparkline=true&price_change_percentage=24h%2C30d`
      );
      setPage(page + 50)
      setCoinList(response.data);
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
    searchCoinText,
    setSearchCoinText,
    searchCoin,
    page,
  
  };
  return <CoinContext.Provider value={values}>{children}</CoinContext.Provider>;
};

export const useCoin = () => useContext(CoinContext);
export default CoinProvider;
