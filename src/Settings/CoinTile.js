import React from "react";
import { CryptoContext } from "../App/CryptoProvider";
import { SelectTile, DisableTile, DeleteTile } from "../Shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "../Shared/CoinImage";

const clickCoinHandler = (topSection, coinKey, addCoin, removeCoin) => {
  //if top section then removeCoin else addCoin functionality to be given
  return topSection ? () => removeCoin(coinKey) : () => addCoin(coinKey);
};

export default function({ coinKey, topSection }) {
  return (
    <CryptoContext.Consumer>
      {({ coinList, onRemoveCoin, onAddCoin, isInFavorites }) => {
        //get the coin
        let coin = coinList[coinKey];
        let COIN_TILE = SelectTile;
        //if topSection is true then DeletableTile otherwise DisabledTile
        if (topSection) {
          COIN_TILE = DeleteTile;
        } else if (isInFavorites(coinKey)) {
          COIN_TILE = DisableTile;
        }

        return (
          <COIN_TILE
            onClick={clickCoinHandler(
              topSection,
              coinKey,
              onAddCoin,
              onRemoveCoin
            )}
          >
            <CoinHeaderGrid
              topSection={topSection}
              name={coin.CoinName}
              symbol={coin.Symbol}
            />
            <CoinImage coin={coin} />
          </COIN_TILE>
        );
      }}
    </CryptoContext.Consumer>
  );
}
