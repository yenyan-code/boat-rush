import { useState } from 'react';
import './App.css';

const assetsList = [
  { name: 'media__1782218204274.png', desc: 'Empty asset (0 bytes)' },
  { name: 'media__1782218204303.png', desc: '168x185px (7.3 KB)' },
  { name: 'media__1782218226446.png', desc: '1024x1024px (30.1 KB)' },
  { name: 'media__1782218235704.png', desc: '1022x1024px (51.4 KB)' },
];

function App() {
  return (
    <div className="inspector-layout">
      <h1>Boat Rush - Asset Inspector</h1>
      <p>We are previewing the uploaded files in `/public/assets/` to identify the game sprites (Boat, Ocean, Shark, Rock, Coin, Jellyfish).</p>
      
      <div className="inspector-grid">
        {assetsList.map((asset) => (
          <div key={asset.name} className="inspector-card">
            <h3>{asset.name}</h3>
            <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '10px' }}>{asset.desc}</p>
            {asset.name.includes('274') ? (
              <div style={{ height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000', color: '#666', borderRadius: '4px' }}>
                Empty File
              </div>
            ) : (
              <div className="image-preview-box">
                <img 
                  src={`/assets/${asset.name}`} 
                  alt={asset.name} 
                  className="pixelated-image" 
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
