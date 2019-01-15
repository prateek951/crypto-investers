import React from "react";
import styled from "styled-components";
import {
  DeleteCoinElement,
  DisableCoinElement
} from "../components/CoinElement";

//styles
export const CoinHeaderGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const CoinSymbol = styled.div`
  justify-self: right;
`;

const DeleteIcon = styled.div`
    justify-self: right;
    display: none;
    ${DeleteCoinElement}:hover & {
        display: block;
        color:red;
    }
`;

export default function({name,symbol,slic}) {
    return <CoinHeaderGridStyled>
        <div>{name}</div>
        {slic ? (
            <DeleteIcon>X</DeleteIcon>
        ):(<CoinSymbol>{symbol}</CoinSymbol>)}
    </CoinHeaderGridStyled>
}