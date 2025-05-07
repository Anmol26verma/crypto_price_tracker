import React from 'react';
import type { CryptoData } from '../types';

const CryptoRow: React.FC<{ coin: CryptoData }> = ({ coin }) => {

    return (
        <tr>
            <td>{coin.id}</td>
            <td>   <img
                src={coin.icon}
                alt={`${coin.name} logo`}
                style={{ width: 20, height: 20, verticalAlign: 'middle', marginRight: 8 }}
            /> 
            {coin.name} ({coin.symbol})
            </td>
            <td>${coin.price.toLocaleString()}</td> 
            <td style={{ color: coin.change1h >= 0 ? 'green' : 'red' }}>{coin.change1h}%</td>
            <td style={{ color: coin.change24h >= 0 ? 'green' : 'red' }}>{coin.change24h}%</td>
            <td style={{ color: coin.change7d >= 0 ? 'green' : 'red' }}>{coin.change7d}%</td> 
            <td>${coin.marketCap.toLocaleString()}</td>         
            <td>${(coin.volume / 1e6).toFixed(2)}M</td> 
            <td>{coin.circulatingSupply.toLocaleString()}</td>
            <td>{coin.maxSupply ? coin.maxSupply.toLocaleString() : 'N/A'}</td>
            <td>
                <img
                    src={`https://quickchart.io/chart?width=60&height=20&c=${encodeURIComponent(JSON.stringify({
                        type: 'sparkline',
                        data: {
                            datasets: [
                                {
                                    data: generateChartData(coin.change7d),
                                    borderColor: coin.change7d >= 0 ? 'green' : 'red',
                                    fill: false,
                                },
                            ],
                        },
                        options: {
                            elements: { point: { radius: 0 } },
                            scales: { x: { display: false }, y: { display: false } },
                            plugins: { legend: { display: false } },
                        },
                    }))}`}
                    alt={`${coin.name} 7d chart`}
                    width="60"
                    height="20"
                />
            </td>

        </tr>
    );
};

function generateChartData(latestChange: number): number[] {
    const base = 100;
    const steps = 7;
    const data: number[] = [base];

    for (let i = 1; i <= steps; i++) {
        const fluctuation = (Math.random() - 0.5) * latestChange;
        data.push(+((data[data.length - 1] + fluctuation)).toFixed(2));
    }

    return data;
}

export default CryptoRow;
