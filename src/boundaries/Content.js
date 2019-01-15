import React from "react";
import { CryptoContext } from "../CryptoProvider";

export default function(props) {
    return <CryptoContext.Consumer>
        {({coins}) => {
            if(!coins) {
                return <div>Coins are being fetched...Please wait.</div>
            }
            return <div>{props.children}</div>
        }}
    </CryptoContext.Consumer>
}