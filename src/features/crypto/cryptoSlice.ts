import { createSlice, type PayloadAction, } from '@reduxjs/toolkit';
import type { CryptoData } from '../../types';
import mockData from '../../data/mockData';

interface CryptoState {
  coins: CryptoData[];
}

const initialState: CryptoState = {
  coins: mockData,
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateCoin(state, action: PayloadAction<CryptoData>) {
      const index = state.coins.findIndex(c => c.id === action.payload.id);
      if (index !== -1) {
        state.coins[index] = action.payload;
      }
    },
  },
});

export const { updateCoin } = cryptoSlice.actions;
export default cryptoSlice.reducer;