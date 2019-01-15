import React from "react";

const CoinImage = ({ coin, style }) => {
  return (
    <img
      alt={coin.CoinSymbol}
      style={style || { height: "50px" }}
      src={`http://crytocompare.com/${coin.ImageUrl}`}
    />
  );
};

export default CoinImage;
