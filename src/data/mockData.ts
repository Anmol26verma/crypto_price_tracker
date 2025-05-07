import type { CryptoData } from '../types';
import bitcoin from "../assets/image.png";
import ethereum from "../assets/image copy.png";
import tether from "../assets/image copy 2.png";
import binance from "../assets/image copy 3.png";
import cardano from "../assets/image copy 4.png";
// import chartBtc from "../assets/chart-btc.png";
// import chartEth from "../assets/chart-eth.png";
// import chartUsdt from "../assets/chart-usdt.png";
// import chartBnb from "../assets/chart-bnb.png";
// import chartAda from "../assets/chart-ada.png";

const mockData: CryptoData[] = [
  {
    id: 'btc',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 60000,
    change1h: 0.3,
    change24h: 2.5,
    change7d: 4.2,
    marketCap: 1200000000000,
    volume: 1000000000,
    circulatingSupply: 19000000,
    maxSupply: 21000000,
    icon: bitcoin
    // chart7d: chartBtc,
  },
  {
    id: 'eth',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 3000,
    change1h: -0.1,
    change24h: -1.2,
    change7d: 3.1,
    marketCap: 400000000000,
    volume: 500000000,
    circulatingSupply: 120000000,
    maxSupply: null,
    icon: ethereum,
    // chart7d: chartEth,
  },
  {
    id: 'usdt',
    name: 'Tether',
    symbol: 'USDT',
    price: 1,
    change1h: 0.0,
    change24h: 0,
    change7d: 0.01,
    marketCap: 100000000000,
    volume: 800000000,
    circulatingSupply: 80000000000,
    maxSupply: null,
    icon: tether,
    // chart7d: chartUsdt,
  },
  {
    id: 'bnb',
    name: 'BNB',
    symbol: 'BNB',
    price: 400,
    change1h: 0.2,
    change24h: 0.5,
    change7d: 2.2,
    marketCap: 60000000000,
    volume: 200000000,
    circulatingSupply: 150000000,
    maxSupply: 200000000,
    icon: binance,
    // chart7d: chartBnb,
  },
  {
    id: 'ada',
    name: 'Cardano',
    symbol: 'ADA',
    price: 1.2,
    change1h: -0.4,
    change24h: -0.8,
    change7d: 1.5,
    marketCap: 40000000000,
    volume: 300000000,
    circulatingSupply: 32000000000,
    maxSupply: 45000000000,
    icon: cardano,
    // chart7d: chartAda,
  },
];

export default mockData;
