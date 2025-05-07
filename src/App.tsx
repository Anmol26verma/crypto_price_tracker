
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { startSimulation } from './utils/simulateUpdates';
import type { RootState } from './Store/store';
import CryptoTable from './features/crypto/CryptoTable';

function App() {
  const dispatch = useDispatch();
  const coins = useSelector((state: RootState) => state.crypto.coins);

  useEffect(() => {
    startSimulation(coins, dispatch);
  }, []);

  return (
    <>
      <div className="App">
        <h1>📈 Crypto Price Tracker</h1>
        <CryptoTable />
      </div>
    </>
  )
}

export default App
