import React from 'react';
import styled from 'styled-components';
import {CryptoContext} from '../App/CryptoProvider';
import CoinImage from '../Shared/CoinImage';
import {Tile} from '../Shared/Tile';

const SpotLightName = styled.h1`
  text-align: center;
`;

export default function() {
  return (
    <CryptoContext.Consumer>
      {({coinList, currentFavorite}) =>
        <Tile>
          <SpotLightName>{ coinList[currentFavorite] ? coinList[currentFavorite].CoinName: "No coins to show" }</SpotLightName>
          <CoinImage coin={coinList[currentFavorite]} spotlight/>
        </Tile>
      }
    </CryptoContext.Consumer>
  )
  
}
