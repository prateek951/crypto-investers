import React from "react";
import { CryptoContext } from "../CryptoProvider";
import {
  SelectCoinElement,
  DeleteCoinElement,
  DisableCoinElement
} from "../components/CoinElement";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "../images/CoinImage";

function handleClick(slic, coinId, addCoin, removeCoin) {
  return slic ? () => removeCoin(coinId) : () => addCoin(coinId);
}

const Coin = ({ coinId, slic }) => {
  return (
    <CryptoContext.Consumer>
      {({ coins, addCoin, removeCoin, isInFavorites }) => {
        let coin = coins[coinId];
        //assign initial class
        let CoinClass = SelectCoinElement;
        if (slic) {
          CoinClass = DeleteCoinElement;
        } else if (isInFavorites(coinId)) {
          CoinClass = DisableCoinElement;
        }
        return (
          <CoinClass onClick={handleClick(slic, coinId, addCoin, removeCoin)}>
            <CoinHeaderGrid name={coin.name} symbol={coin.Symbol} slic={slic} />
            <CoinImage coin={coin} />
          </CoinClass>
        );
      }}
    </CryptoContext.Consumer>
  );
};

export default Coin;
