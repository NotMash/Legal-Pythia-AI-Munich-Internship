import React, { useState } from 'react';
import './App.css';

function App() {
  // State for managing uploaded documents and risk items
  const [documents, setDocuments] = useState([]);
  const [risks, setRisks] = useState([
    { color: 'green', text: 'Text 1' },
    { color: 'orange', text: 'Text 2' },
    { color: 'red', text: 'Text 3' }
  ]);

  // Handler for file upload - this would need to be implemented
  const handleFileUpload = (event) => {
    // Code to handle file upload and update state
  };

  return (
    <div className="App">
      <header className="App-header">
        Legal Pythia
      </header>
      <div className="content">
        <div className="documents-section">
          <h2>Documents</h2>
          <button onClick={handleFileUpload}>Upload</button>
          <span>csv, pdf, docx ...</span>
        </div>
        <div className="risk-section">
          <h2>Risk</h2>
          {risks.map((risk, index) => (
            <div key={index} className="risk-item" style={{color: risk.color}}>
              {risk.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;