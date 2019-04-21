import React from 'react';
import styled from 'styled-components';
import {CryptoContext} from "../App/CryptoProvider";
import CoinTile from "./CoinTile";
import getCoinsToDisplay from './GetCoins2Display';

export const CoinGridStyled = styled.div`
  display: grid;   
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); 
  grid-gap: 15px; 
  margin-top: 40px; 
`
  // function getLowerSectionCoins(coinList, filteredCoins){
  //   return (filteredCoins && Object.keys(filteredCoins)) ||
  //     Object.keys(coinList).slice(0, 100)
  // }

export default function ({topSection}){

  return (
    <CryptoContext.Consumer>
    {({coinList, favorites, filteredCoins}) => (
      <CoinGridStyled>
        { getCoinsToDisplay(coinList, topSection, favorites, filteredCoins).map(coinKey =>
            <CoinTile coinKey={coinKey} key={coinKey} topSection={topSection}/>)
        }
      </CoinGridStyled>
    )}
  </CryptoContext.Consumer>
  );
}
