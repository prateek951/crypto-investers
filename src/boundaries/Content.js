import React from 'react';
import { CryptoContext } from '../CryptoProvider';
const Content = (props) => {
    return <CryptoContext.Consumer>
        {({coins,prices,first}) => {
            if(!coins) {
                return <div>Fetching the Coins..</div>
            }
            if(!first && !prices) {
                return <div>Fetching the Prices</div>
            }
            return <div>{props.children}</div>
        }}
    </CryptoContext.Consumer>
};

export default Content;