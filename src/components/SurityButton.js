import React from "react";
import styled from "styled-components";
import { CryptoContext } from "../CryptoProvider";
import { fontSize1, greenBoxShadow, color3 } from "../styled/Style";

//Set the styled components
const SurityButtonStyled = styled.div`
  margin: 20px;
  color: ${color3} ${fontSize1};
  padding: 5px;
  cursor: pointer;
  &:hover {
    ${greenBoxShadow}
  }
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
