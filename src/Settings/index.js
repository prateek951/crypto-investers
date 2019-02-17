import React from 'react';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid';
import ConfirmButton from './SurityButton';
import Search from './Search';
import WelcomeMessage from './WelcomeMessage';

export default function() {
  return <Page name="settings">
      <WelcomeMessage />
      <CoinGrid topSection />
      <ConfirmButton />
      <Search />
      <CoinGrid />
    </Page>
}