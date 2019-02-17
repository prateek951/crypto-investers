import React from "react";
import ReactHighcharts from "react-highcharts";
import { CryptoContext } from "../App/CryptoProvider";
import { Tile } from "../Shared/Tile";
import HighchartsConfig from "./HighchartsConfig";
import HighchartsTheme from "./HighchartsTheme";
import ChartSelect from "./ChartSelect";
ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

export default function() {
  return (
    <CryptoContext.Consumer>
      {({ historical, onSelectStatsChart }) => (
        <Tile>
          <ChartSelect
            defaultValue="months"
            onChange={e => onSelectStatsChart(e.target.value)}
          >
            <option value="days">Days</option>
            <option value="weeks">Weeks</option>
            <option value="months">Months</option>
          </ChartSelect>
          {historical ? (
            <ReactHighcharts config={HighchartsConfig(historical)} />
          ) : (
            <div>Loading Historical Data...</div>
          )}
        </Tile>
      )}
    </CryptoContext.Consumer>
  );
}
