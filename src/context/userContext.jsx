import { createContext, useContext, useState } from "react";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [money, setMoney] = useState(100000);
  const [wallet, setWallet] = useState([]);
  const [items, setItems] = useState([]);

  const addToWallet = (item) => {
    const walletCurrent = wallet.filter((walletItem) => walletItem.id !== item.id);
    const checkWallet = wallet.find((walletItem) => walletItem.id === item.id);
    if (checkWallet) {
      checkWallet.amount += 1;
      setWallet([...walletCurrent, checkWallet]);
    } else {
      setItems((items) => [item, ...items]);
      setWallet([
        ...wallet,
        {
          id: item.id,
          amount: 1,
        },
      ]);
    }

  };
  const removeFromWallet = (item) => {
    const checkWallet = wallet.find((walletItem) => walletItem.id === item.id);
    const walletCurrent = wallet.filter((walletItem) => walletItem.id !== item.id);
    checkWallet.amount -= 1;

    if (checkWallet.amount === 0) {
      const filtered = items.filter((filteredItem) => filteredItem.id !== item.id);
      setItems(filtered);
      setWallet([...walletCurrent]);
    } else {
      setWallet([...walletCurrent, checkWallet]);
    }

  };

    
  const values = {
    theme,
    setTheme,
    money,
    setMoney,
    wallet,
    addToWallet,
    removeFromWallet,
    items,
    setItems
  }

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
export default UserProvider;
