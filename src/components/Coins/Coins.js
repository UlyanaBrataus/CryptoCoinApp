import React from "react";
import CoinItem from "../CoinItem";
import { Link } from "react-router-dom";
import Coin from "../routes/Coin";
import "./Coins.css";

const Coins = props => {
  return (
    <div className="container">
      <div>
        <div className="heading">
          <ul className="coin-list">
            <li>#</li>
            <li className="coin-name">Coin</li>
            <li>Price</li>
            <li>24h</li>
            <li>Volume</li>
            <li>Market Cap</li>
          </ul>
        </div>

        {props.coins.map(coins => {
          return (
            <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
              <CoinItem coins={coins} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Coins;
