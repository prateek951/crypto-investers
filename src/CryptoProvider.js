import React, { Component } from "react";
import { throws } from "assert";

export const CryptoContext = React.createContext();

export default class CryptoProvider extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         page : 'settings',
         setPage : this.setPage
      }
    }
    setPage = page => this.setState({ page: page });
    render() {
    return(
        <CryptoContext.Provider value={this.state}>
            {this.props.children}
        </CryptoContext.Provider>
    );
  }
}
