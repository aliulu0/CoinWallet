import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Table, Accordion, Card} from "react-bootstrap";
import parse from 'html-react-parser';
import { LinkContainer } from "react-router-bootstrap";
import {MdArrowBackIosNew} from 'react-icons/md';
import HistoryCart from "./HistoryCart";
import "./coinDetail.css";
import {useUser} from "../../context/userContext";
import ToastMessage from "../../helper/ToastMessage";

function CoinDetail() {
  const [coin, setCoin] = useState({});
  const [message, setMessage] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [show, setShow] = useState(true);
  const params = useParams();
  const {theme, addToWallet, removeFromWallet, money, setMoney} = useUser();

  async function getCoin() {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${params.coinId}`
    );
    setCoin(response.data);
  }

  useEffect(() => {
    getCoin();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleAddToWallet(){
    if(money > coin.market_data.current_price.usd){
      addToWallet(coin)
      setMoney(money - coin.market_data.current_price.usd)
    }
    setMessage("The coin successfully bought!");
    setHidden(false)
    setShow(true)
  }
  function handleRemoveFromWallet(){
    removeFromWallet(coin);
    setMoney(money + coin.market_data.current_price.usd);
    setMessage("The coin successfully sold!");
    setHidden(false)
    setShow(true)
  }
  const handleClose = () => {
    setShow(false);
    setHidden(true)
  }
  localStorage.setItem("money", JSON.stringify(money));
  return (
    <div className="coin-detail">
      <div hidden={hidden}>
      <ToastMessage message={message} isShow={show} close={handleClose}/>
      </div>
      <Card className={`${theme === "dark" ? "bg-dark text-light" : ""}`}>
        <Card.Header>
          <LinkContainer to="/" className="backPage">
          <MdArrowBackIosNew />
          </LinkContainer>
          <div className="coin-detail-header">
          <button className="btn btn-success" onClick={handleAddToWallet}>BUY</button>
          <h1 className="text-center">{coin.name}</h1>
          <button className="btn btn-danger" onClick={handleRemoveFromWallet}>Sell</button>
          </div>
        </Card.Header>
        <Card.Body className="content">
          <div className="rank">
            <p className="rank-text">Rank: # {coin.market_cap_rank}</p>
          </div>
          <div className="info">
            <div className="left">
              {coin.image ? <img src={coin.image.small} alt="" /> : null}
              <p>
                <strong>{coin.name}</strong>
              </p>
              {coin.symbol ? (
                <p className="symbol">( {coin.symbol.toUpperCase()}/USD )</p>
              ) : null}
            </div>
            <div className="right">
              <h1>
                {coin.market_data?.current_price ? (
                  <h1>
                    ${parseFloat(coin.market_data.current_price.usd).toFixed(3)}
                  </h1>
                ) : null}
              </h1>
            </div>
          </div>
          <HistoryCart id={params.coinId} />
          <Table striped key={params.coinId} bordered variant={`${theme === "dark" ? "bg-dark text-light" : "light"}`}>
            <thead>
              <th>1h</th>
              <th>24h</th>
              <th>7d</th>
              <th>14d</th>
              <th>30d</th>
              <th>1yr</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  {coin.market_data?.price_change_percentage_1h_in_currency ? (
                    <p
                      style={{
                        color:
                          coin.market_data
                            .price_change_percentage_1h_in_currency.usd > 0
                            ? "green"
                            : "red"
                      }}
                    >
                      {coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p
                      style={{
                        color:
                          coin.market_data
                            .price_change_percentage_24h_in_currency.usd > 0
                            ? "green"
                            : "red"
                      }}
                    >
                      {coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_7d_in_currency ? (
                    <p
                      style={{
                        color:
                          coin.market_data
                            .price_change_percentage_7d_in_currency.usd > 0
                            ? "green"
                            : "red"
                      }}
                    >
                      {coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_14d_in_currency ? (
                    <p
                      style={{
                        color:
                          coin.market_data
                            .price_change_percentage_14d_in_currency.usd > 0
                            ? "green"
                            : "red"
                      }}
                    >
                      {coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_30d_in_currency ? (
                    <p
                      style={{
                        color:
                          coin.market_data
                            .price_change_percentage_30d_in_currency.usd > 0
                            ? "green"
                            : "red"
                      }}
                    >
                      {coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_1y_in_currency ? (
                    <p
                      style={{
                        color:
                          coin.market_data
                            .price_change_percentage_1y_in_currency.usd > 0
                            ? "green"
                            : "red"
                      }}
                    >
                      {coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
              </tr>
            </tbody>
          </Table>
          <div className="data">
            <div className="left-data">
              <div className="row">
                <h5>24 Hour High</h5>
                {coin.market_data?.high_24h ? (
                  <p>$ {parseFloat(coin.market_data.high_24h.usd).toFixed(3)}</p>
                ) : null}
              </div>
              <div className="row">
                <h5>24 Hour Low</h5>
                {coin.market_data?.low_24h ? (
                  <p>$ {parseFloat(coin.market_data.low_24h.usd).toFixed(3)}</p>
                ) : null}
              </div>
            </div>
            <div className="right-data">
              <div className="row">
                <h5>Market Cap</h5>
                {coin.market_data?.market_cap ? (
                  <p>$ {coin.market_data.market_cap.usd.toLocaleString()}</p>
                ) : null}
              </div>
              <div className="row">
                <h5>Total Volume</h5>
                {coin.market_data?.total_volume ? (
                  <p>$ {coin.market_data.total_volume.usd.toLocaleString()}</p>
                ) : null}
              </div>
            </div>
          </div>
          <Accordion defaultActiveKey="1" className={`${theme === "dark" ? "bg-dark text-light" : ""}`}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h5>About {coin.name}</h5>
              </Accordion.Header>
              <Accordion.Body>
                {coin.description?.en ? (
                  <p>{parse(coin.description.en)}</p>
                ) : (
                  ""
                )}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CoinDetail;
