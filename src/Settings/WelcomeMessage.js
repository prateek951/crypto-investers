import React from "react";
import { CryptoContext } from "../App/CryptoProvider";

export default function({ firstVisit }) {
  return (
    <CryptoContext.Consumer>
      {({ firstVisit }) =>
        firstVisit ? (
          <div>
            InstillCryptos, the one time solution for exploring cryptocurrency
            trends with visualization
          </div>
        ) : null
      }
    </CryptoContext.Consumer>
  );
}
