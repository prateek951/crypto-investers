function getLowerSectionCoins(coinList, filteredCoins){
    return (filteredCoins && Object.keys(filteredCoins)) ||
    Object.keys(coinList).slice(0, 100)
}
export default function getCoinsToDisplay  (coinList, topSection, favorites, filterCoins)  {
    return topSection ? favorites :getLowerSectionCoins(coinList, filterCoins);
}