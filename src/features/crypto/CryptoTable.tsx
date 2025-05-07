import React from 'react';
import { useSelector } from 'react-redux';
import CryptoRow from '../../components/CryptoRow';
import type { RootState } from '../../Store/store';

const CryptoTable: React.FC = () => {
  const coins = useSelector((state: RootState) => state.crypto.coins);

  return (
    <table>
      <thead>
        <tr> 
          <th>#</th>
          <th>Name</th>
          <th>Price</th> 
          <th>1h %</th>
          <th>24h %</th>
          <th>7d %</th> 
          <th>Market Cap</th>
          <th>Volume</th> 
          <th>Supply</th>
          <th>Max</th>
          <th>Last 7d</th>
        </tr>
      </thead>
      <tbody>
        {coins.map(coin => <CryptoRow key={coin.id} coin={coin} />)}
      </tbody>
    </table>
  );
};

export default CryptoTable;
