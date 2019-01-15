import React from "react";
import Welcome from "./Welcome";
import SurityButton from "../SurityButton";
import Page from "../../boundaries/Page";
import CoinGrid from "../CoinGrid";

export default () => {
  return (
    <Page name="settings">
      <Welcome />
      <SurityButton />
      <CoinGrid />
    </Page>
  );
};
