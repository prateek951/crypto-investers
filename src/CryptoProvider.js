import React, { Component } from "react";
import * as _ from "lodash";

const CRYPTO_COMPARE = require("cryptocompare");

const maxFavs = 10;
const timeUnits = 10;

export const CryptoContext = React.createContext();

export default class CryptoProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "dashboard",
      first: false,
      favorites: ["BTC", "ETH", "XMR", "DOGE"],
      ...this.savedSettings(),
      setPage: this.setPage,
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isInFavorites: this.isInFavorites,
      addToFavorites: this.addToFavorites
    };
  }

  componentDidMount() {
    this.getCoins();
  }
  getCoins = async () => {
    let coinList = await CRYPTO_COMPARE.coinList();
    // console.log(coins);
    let { Data: coins } = coinList;
    this.setState({ coins: coins });
  };

  /**
   * first  is true for the very first entry
   * first is false is the user has already visited
   */
  addToFavorites = () => {
    this.setState({ first: false, page: "dashboard" });
    localStorage.setItem(
      "cryptos",
      JSON.stringify({
        test: "test"
      })
    );
  };

  addCoin = coinId => {
    let favorites = this.state.favorites.slice();
    if (favorites.length > maxFavs) return;
    favorites.push(coinId);
    this.setState({ favorites: favorites });
  };

  isInFavorites = coinId => _.includes(this.state.favorites, coinId);

  removeCoin = coinId => {
    let favorites = this.state.favorites.slice();
    //use lodash remove a specific coin using coinId
    this.setState({ favorites: _.pull(favorites, coinId) });
  };

  savedSettings = () => {
    let instillCryptoData = JSON.parse(localStorage.getItem("cryptos"));
    if (!instillCryptoData) {
      return { page: "settings", first: true };
    }
    return {};
  };

  setPage = page => this.setState({ page: page });
  render() {
    return (
      <CryptoContext.Provider value={this.state}>
        {this.props.children}
      </CryptoContext.Provider>
    );
  }
}
