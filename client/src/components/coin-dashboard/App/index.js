import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Layout from './Layout';
import { CryptoProvider } from './CryptoProvider';
import Content from '../Shared/Content';
import Dashboard from '../Dashboard';
import Settings from '../Settings';

class App extends Component {
  render() {
    return (
      <Layout>
        <CryptoProvider>
          <Navbar />
          <Content>
            <Settings />
            <Dashboard />
          </Content>
        </CryptoProvider>
      </Layout>
    );
  }
}

export default App;
