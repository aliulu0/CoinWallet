import React from "react";
import { Card } from "react-bootstrap";
import { useUser } from "../../context/userContext";
import './walletList.css';

function WalletList(props) {
    const { addToWallet, wallet, removeFromWallet, money, setMoney, theme } = useUser();
    let walletItem = [];
    for (let index = 0; index < wallet.length; index++) {
        walletItem.push(props.items.filter(item => item.id === wallet[index].id))
    }
    let walletCoin = [];

    const handleAddToWallet = (item) => {
        if (money > item.current_price) {
            addToWallet(item);
            setMoney(money - item.current_price);
        }
    }
    const handleRemoveFromWallet = (item) => {
        removeFromWallet(item);
        setMoney(money + item.current_price);
    }

    return (
        <div>
            {
                walletItem.map(items => items.map((item) => (
                    <>
                        <Card className={`mt-3 ${theme === "dark" ? "bg-dark text-light" : ""}`} key={item.id}>
                            {items.forEach((element) => {
                                let live = wallet.find((x) => x.id === element.id);
                                walletCoin.push(live);
                            })}
                            <Card.Header className="wallet-header"><img className="mt-3" src={item.image} alt={item.id} /><span>{item.symbol.toUpperCase()}</span></Card.Header>
                            <Card.Body>
                                <div className="current-price">
                                    <Card.Text><span>$ {item.current_price}</span></Card.Text>
                                </div>
                                <div className="buttons">
                                    <button className="btn btn-success btn-lg" onClick={() => handleAddToWallet(item)}>Buy</button>
                                    {walletCoin && walletCoin.map((coin, i) => coin.id === item.id ? <button className={`btn btn-lg ${theme === "dark" ? "btn-light" : "btn-dark"} `} key={i}>x {coin.amount}</button> : "")}
                                    <button className="btn btn-danger btn-lg" onClick={() => handleRemoveFromWallet(item)}>Sell</button>
                                </div>
                            </Card.Body>
                        </Card>
                    </>
                )))
            }
        </div>
    );
}

export default WalletList;