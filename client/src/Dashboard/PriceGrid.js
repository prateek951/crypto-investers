import React from 'react';
import styled from 'styled-components';
import {CryptoContext} from "../App/CryptoProvider";
import PriceTile from './PriceTile';

const PriceGrid = styled.div`
  display: grid; 
  grid-template-columns: repeat(5, 1fr); 
  grid-gap: 15px; 
  margin-top: 40px; 
`

export default function () {
  return (
    <CryptoContext.Consumer>
      {({prices}) => (
        <PriceGrid>
          {prices.map((price, index) => (
            <PriceTile key={`priceTile-${index}`} index={index} price={price}/>
          ))}
        </PriceGrid>
      )}
    </CryptoContext.Consumer>
  );
}
