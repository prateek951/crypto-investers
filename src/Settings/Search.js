import fuzzy from "fuzzy";
import _ from "lodash";
import React from "react";
import styled from "styled-components";
import { CryptoContext } from "../App/CryptoProvider";
import { backgroundColor2, fontSize2 } from "../Shared/Styles";

//Style for Search Grid
const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;
//Style for Search Input
const SearchInput = styled.input`
  ${backgroundColor2}
  ${fontSize2}
  border: 1px solid;
  height: 25px;
  color: #1163c9;
  place-self: center left;
`;

//debounce is just like setTimeout but little more configured
const handleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
  // Get all the coin symbols
  let coinSymbols = Object.keys(coinList);
  // Get all the coin names, map symbol to name
  let coinNames = coinSymbols.map(sym => coinList[sym].CoinName);
  let stringsToSearch = coinSymbols.concat(coinNames);
  //Fuzzy searching
  let fuzzyResults = fuzzy
    .filter(inputValue, stringsToSearch, {})
    .map(result => result.string);
  let filteredCoins = _.pickBy(coinList, (result, symKey) => {
    let coinName = result.CoinName;
    return (
      _.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName)
    );
  });
  setFilteredCoins(filteredCoins);
}, 300);

function filterCoins(e, setFilteredCoins, coinList) {
  let inputValue = e.target.value;
  if (!inputValue) {
    setFilteredCoins(null);
    return;
  }
  handleFilter(inputValue, coinList, setFilteredCoins);
}

export default function() {
  return (
    <CryptoContext.Consumer>
      {({ coinList, onSetFilteredCoins }) => (
        <SearchGrid>
          <h2>Search all coins</h2>
          <SearchInput onKeyUp={e => filterCoins(e, onSetFilteredCoins, coinList)} />
        </SearchGrid>
      )}
    </CryptoContext.Consumer>
  );
}
