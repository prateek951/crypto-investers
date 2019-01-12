import React from "react";
import styled, { css } from "styled-components";
import { CryptoContext } from "../CryptoProvider";

//Style the Bar
const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
`;

//Create styled component using styled-components 
const ButtonElement = styled.div`
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      text-shadow: 0px 0px 60px #03ff03;
    `}
`;
//Set the correct case 
const convertCase = lowercase =>
  lowercase.charAt(0).toUpperCase() + lowercase.substr(1);

//Set up the consumer for the context 
const Button = ({ name, active }) => {
  return (
    <CryptoContext.Consumer>
      {({ page, setPage }) => (
        <ButtonElement active={page === name} onClick={() => setPage(name)}>
            {convertCase(name)}         
        </ButtonElement>
      )}
    </CryptoContext.Consumer>
  );
};

export default function() {
    return( 
        <Bar>
            <div>instillCrypto</div>
            <div></div>
            <Button name="dashboard" active/>
            <Button name="settings"/>
        </Bar>
    )
}
