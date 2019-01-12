import React from 'react';
import { CryptoContext } from '../../CryptoProvider';


const Welcome = ({first}) => {
    return (
        <CryptoContext.Consumer>
         { ({first}) => 
         first ? <div>
             Welcome to InstillCrypto,
             Please select the coins to begin with. 
         </div> : null}
        </CryptoContext.Consumer>
    );
};

export default Welcome;