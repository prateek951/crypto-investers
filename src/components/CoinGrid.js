import React from "react";
import styled, { css } from "styled-components";
import { CryptoContext } from "../CryptoProvider";
import Coin from "./Coin";

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, lfr);
  grid-gap: 15px;
  margin-top: 40px;
`;
/**
 *
 * @param {*} coinlist the list of the coins
 * @param {*} slic get the slice of the coins if slic enabled
 */

const getCoins = (coinsList, slic) => {
  return Object.keys(coinsList).slice(0, slic ? 10 : 100);
};

export default function({ slic }) {
  return (
    <CryptoContext.Consumer>
      {({ coins }) => {
        <CoinGridStyled>
          {getCoins(coins, slic).map(k => (
            <Coin coinId={k} slic={slic} />
          ))}
        </CoinGridStyled>
      }}
    </CryptoContext.Consumer>
  );
}
