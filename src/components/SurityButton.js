import React from "react";
import styled from "styled-components";
import { CryptoContext } from "../CryptoProvider";

//Set the styled components
const SurityButtonStyled = styled.div`
  margin: 20px;
  color: green;
  cursor: pointer;
`;
export const SurityCenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

export default () => {
  return (
    <CryptoContext.Consumer>
      {({ addToFavorites }) => (
        <SurityCenterDiv>
          <SurityButtonStyled onClick={addToFavorites}>
            Add To Favorites
          </SurityButtonStyled>
        </SurityCenterDiv>
      )}
    </CryptoContext.Consumer>
  );
};
