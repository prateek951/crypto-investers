import React from 'react';
import styled from 'styled-components';
import {CryptoContext} from '../App/CryptoProvider';
import { fontSize1, greenBoxShadow, color3 } from '../Shared/Styles';

//Style the Surity Button
const SurityButtonStyled = styled.div`
  margin: 20px;
  color: ${color3}
  ${fontSize1}
  padding: 5px;
  cursor: pointer;
  &:hover {
    ${greenBoxShadow}
  }
`;

//Center the Divison
export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;
export default function() {
  return (
    <CryptoContext.Consumer>
      {({onAgreeFavorites}) => 
        <CenterDiv>
          <SurityButtonStyled onClick={onAgreeFavorites}>
              Add TO Favorites
          </SurityButtonStyled>
        </CenterDiv>
      }
    </CryptoContext.Consumer>
  )
}