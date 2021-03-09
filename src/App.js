import  { useState } from 'react';
import QrReader from 'react-qr-scanner';
import Decoder from './Decoder';
import './App.css';

function App() {
  const [ result, setResult ] = useState(null);
  const [ scanning, setScanning ] = useState(true);
  const [ facingMode, setFacingMode ] = useState("rear");

  function onScan (result) {
    if (result) {
      setResult(result);
      setScanning(false);
    }
  }

  function onReset () {
    setResult(null);
    setScanning(true);
  }

  return (
    <div className="App">
      { scanning && <div style={{ display: "flex", flexDirection: "column" }}>
          <QrReader
            delay={100}
            onError={console.log}
            onScan={onScan}
            facingMode={facingMode}
          />
          <button onClick={() => setFacingMode(facingMode === "front" ? "rear" : "front")}>Flip Camera</button>
        </div>
      }
      { result && <Decoder data={result.text} /> }
      { !scanning && <button onClick={onReset}>Scan Again</button> }
    </div>
  );
}

export default App;
