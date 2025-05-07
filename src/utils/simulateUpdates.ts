import { updateCoin } from '../features/crypto/cryptoSlice';
import type { AppDispatch } from '../Store/store';
import type { CryptoData } from '../types';

export function startSimulation(data: CryptoData[], dispatch: AppDispatch) {
  setInterval(() => {
    const randomCoin = data[Math.floor(Math.random() * data.length)];
    const priceChange = randomCoin.price * ((Math.random() - 0.5) * 0.05);
    const change24h = (Math.random() - 0.5) * 10;
    const change7d = (Math.random() - 0.5) * 10;
    const volumeChange = randomCoin.volume * ((Math.random() - 0.5) * 0.1);

    dispatch(updateCoin({
      ...randomCoin,
      price: +(randomCoin.price + priceChange).toFixed(2),
      change24h: +change24h.toFixed(2),
      change7d: +change7d.toFixed(2),
      volume: Math.max(0, randomCoin.volume + volumeChange),
    }));
  }, 2000);
}
