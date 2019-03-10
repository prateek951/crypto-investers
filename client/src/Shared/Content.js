import React from 'react';
import { CryptoContext } from "../App/CryptoProvider";

export default function(props){
  return <CryptoContext.Consumer>
    {({coinList, prices, firstVisit}) => {
      if(!coinList){
        return <div> Loading Coins </div>
      }
      if(!firstVisit && !prices){
        return <div> Loading Prices </div>
      }
      return <div> {props.children} </div>
    }}
  </CryptoContext.Consumer>
}
