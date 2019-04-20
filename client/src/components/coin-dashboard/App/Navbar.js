import React from "react";
import styled, { css } from "styled-components";
import { CryptoContext } from "./CryptoProvider";
//Style the Logo
const Logo = styled.div`
  font-size: 2em;
  font-weight: 600;
  letter-spacing: 4px;
  margin-right: 20px;
`;
//Style the bar
const Bar = styled.div`
  display: grid;
  margin-bottom: 40px;
  grid-template-columns: 180px auto 100px 100px;
`;
//Style the button element
const ButtonElement = styled.div`
  cursor: pointer;
  font-size: 1em;
  ${props =>
    props.active &&
    css`
      text-shadow: 0px 0px 60px #03ff03;
    `}
  ${props =>
    props.hidden &&
    css`
      display: none;
    `}
`;
//Convert case
const convertCase = lowercase =>
  lowercase.charAt(0).toUpperCase() + lowercase.substr(1);

//Set up the consumer for the context
const Button = ({ name }) => {
  return (
    <CryptoContext.Consumer>
      {({ firstVisit, page, setPage }) => (
        <ButtonElement
          active={page === name}
          onClick={() => setPage(name)}
          hidden={firstVisit && name === "dashboard"}
        >
          {convertCase(name)}
        </ButtonElement>
      )}
    </CryptoContext.Consumer>
  );
};

export default function() {
  return (
    <Bar>
      <Logo>InstillCryptos</Logo>
      <div />
      <Button name="dashboard" active />
      <Button name="settings" />
    </Bar>
  );
}
