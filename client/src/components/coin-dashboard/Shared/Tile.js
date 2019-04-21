/** 
 * @desc Reusable Styles for the tiles 
 * @author Prateek Madaan
 */


import styled from "styled-components";
import {
  subtleBoxShadow,
  lightBlueBackground,
  greenBoxShadow,
  redBoxShadow,
} from "./Styles";


//Styles for the a tile 
export const Tile = styled.div`
  ${subtleBoxShadow}
  ${lightBlueBackground}
  padding: 10px;
`;

//Styles for the tile that gets selected 
export const SelectTile = styled(Tile)`
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
  }
`;
//Styles for the tile which can be deleted 
export const DeleteTile = styled(SelectTile)`
  &:hover 
    cursor: pointer;
    ${redBoxShadow}
  }
`;
//Styles for the tile which gets disabled once it is clicked
export const DisableTile = styled(Tile)`
  pointer-events: none;
  opacity: 0.4;
`;
