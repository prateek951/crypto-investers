import styled from "styled-components";
import {
  subtleBoxShadow,
  lightBlueBackground,
  greenBoxShadow,
  redBoxShadow
} from "../styled/Style";

/**
 * Set up the elements
 */
export const CoinElement = styled.div`
  ${subtleBoxShadow}
  ${lightBlueBackground}
padding: 10px;
`;

export const SelectCoinElement = styled(CoinElement)`
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
  }
`;

export const DeleteCoinElement = styled(SelectCoinElement)`
  &:hover {
    cursor: pointer;
    ${redBoxShadow}
  }
`;

export const DisableCoinElement = styled(CoinElement)`
  pointer-events: none;
  opacity: 0.4;
`;
