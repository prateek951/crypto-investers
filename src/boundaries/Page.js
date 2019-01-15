import React from "react";
import { CryptoContext } from "../CryptoProvider";

export default function(props) {
    return <AppContext.Consumer>
        {({page}) => {
            if(page !== props.name) {
                return null;
            }
            return <div>{props.children}</div>
        }}
    </AppContext.Consumer>
}

