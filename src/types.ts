export interface CryptoData { 
    id: string;
    name: string;
    symbol: string;
    price: number;
    change1h: number;
    change24h: number;
    change7d: number;
    marketCap: number;
    volume: number;
    circulatingSupply: number;
    maxSupply: number | null;
    icon: string;
    // chart7d: string;
  }
  