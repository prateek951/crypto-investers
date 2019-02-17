/**
 * Created on 13 February
 * @desc CryptoProvider  Holds the entire state of the application and possible methods
 * @author Prateek Madaan
 *
 */

import React, { Component } from "react";
import * as _ from "lodash";
import moment from "moment";

const CRYPTO_COMPARE = require("cryptocompare");
//Setup the Context
export const CryptoContext = React.createContext();

//Allow only 10 max favorites in the list
const maxFavs = 10;
//Allowing 10 days historical data to be fetched
const timeUnits = 10;

export class CryptoProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //by default page is set to dashboard
      page: "dashboard",
      favorites: [],
      timeInterval: "months",
      prices: [],
      ...this.savedSettings(),
      setPage: this.setPage,
      onAddCoin: this.onAddCoin,
      onRemoveCoin: this.onRemoveCoin,
      isInFavorites: this.isInFavorites,
      onAgreeFavorites: this.onAgreeFavorites,
      onSetCurrentFavorite: this.onSetCurrentFavorite,
      onSetFilteredCoins: this.onSetFilteredCoins,
      onSelectStatsChart: this.onSelectStatsChart
    };
  }
  componentDidMount = () => {
    //Fetch all the coins
    this.getCoins();
    //Fetch prices
    this.getPrices();
    //Fetch historical data
    this.getHistoricalData();
  };

  getCoins = async () => {
    //async call get  coins
    let { Data: coinList } = await CRYPTO_COMPARE.coinList();
    // console.log(coinList);
    //ss
    this.setState({ coinList });
  };
  getHistoricalData = async () => {
    //if first visit then return since no historical data
    if (this.state.firstVisit) return;
    //fetch historical data
    let results = await this.historyPromises();
    let historical = [
      {
        name: this.state.currentFavorite,
        data: results.map((ticker, index) => [
          moment()
            .subtract({ [this.state.timeInterval]: timeUnits - index })
            .valueOf(),
          ticker.USD
        ])
      }
    ];
    //ss
    this.setState({ historical });
  };
  //get prices
  getPrices = async () => {
    //If first visit simply return
    if (this.state.firstVisit === true) return;
    //get the prices
    let prices = await this.prices();
    //ss
    this.setState({ prices: prices });
  };

  prices = async () => {
    let responseData = [];
    //fetch prices for all the favorites
    for (let i = 0; i < this.state.favorites.length; i++) {
      try {
        let priceData = await CRYPTO_COMPARE.priceFull(
          this.state.favorites[i],
          "USD"
        );
        // console.log(priceData);
        responseData.push(priceData);
      } catch (error) {
        // throw new Error(error);
        // console.log(error);
        console.warn(`Error while fetching the prices ${error}`);
      }
    }
    return responseData;
  };
  //Fetch historical data for the current favorite coin
  historyPromises = () => {
    let promises = [];
    for (let i = timeUnits; i > 0; i--) {
      promises.push(
        CRYPTO_COMPARE.priceHistorical(
          this.state.currentFavorite,
          ["USD"],
          moment()
            .subtract({ [this.state.timeInterval]: i })
            .toDate()
        )
      );
    }
    return Promise.all(promises);
  };
  onAddCoin = key => {
    //clone
    let favorites = this.state.favorites.slice();
    //if the length of favs exceed the maxFavs return
    if (favorites.length >= maxFavs) return;
    //add the coin to favorites
    favorites.push(key);
    // ss
    this.setState({ favorites });
  };
  //remove the coin
  onRemoveCoin = key => {
    //clone
    let favorites = [...this.state.favorites];
    //ss
    this.setState({ favorites: _.pull(favorites, key) });
  };
  //if coin is in favorites
  isInFavorites = key => _.includes(this.state.favorites, key);
  //add to favorites
  onAgreeFavorites = () => {
    let currentFavorite = this.state.favorites[0];
    // ss
    this.setState(
      {
        firstVisit: false,
        page: "dashboard",
        currentFavorite,
        prices: null,
        historical: null
      },
      () => {
        this.getPrices();
        this.getHistoricalData();
      }
    );
    //set to the local storage
    localStorage.setItem(
      "cryptos",
      JSON.stringify({
        favorites: this.state.favorites,
        currentFavorite
      })
    );
  };
  //set the current favorite
  onSetCurrentFavorite = symbol => {
    this.setState(
      {
        currentFavorite: symbol,
        historical: null
      },
      this.getHistoricalData
    );
    localStorage.setItem(
      "cryptos",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("cryptos")),
        currentFavorite: symbol
      })
    );
  };
  //saved settings
  savedSettings() {
    //if no cryptos in local Storeage, set firstVisit
    //  to true page to settings

    if (!JSON.parse(localStorage.getItem("cryptos"))) {
      return {
        firstVisit: true,
        page: "settings"
      };
    }
    //occasional visitor
    let { favorites, currentFavorite } = JSON.parse(
      localStorage.getItem("cryptos")
    );
    return { favorites, currentFavorite };
  }
  //set the page
  setPage = page => this.setState({ page });
  //set filtered coins
  onSetFilteredCoins = filteredCoins => this.setState({ filteredCoins });
  //stats chart
  onSelectStatsChart = value => {
    this.setState(
      { timeInterval: value, historical: null },
      this.fetchHistorical
    );
  };

  render() {
    return (
      <CryptoContext.Provider value={this.state}>
        {this.props.children}
      </CryptoContext.Provider>
    );
  }
}
