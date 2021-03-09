import  { useState } from 'react';
import QrReader from 'react-qr-scanner';
import Decoder from './Decoder';
import './App.css';

function App() {
  const [ result, setResult ] = useState(null);
  const [ scanning, setScanning ] = useState(true);

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

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div className="App">
      { scanning && <QrReader
          delay={100}
          style={previewStyle}
          onError={console.log}
          onScan={onScan}
        />
      }
      { result && <Decoder data={result.text} /> }
      { !scanning && <button onClick={onReset}>Scan Again</button> }
    </div>
  );
}

export default App;
