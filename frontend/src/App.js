import React, { useState } from 'react';
import './App.css';

function App() {
  const [documents, setDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState('');
  const [risks, setRisks] = useState([
    { color: 'green', text: 'Text 1' },
    { color: 'orange', text: 'Text 2' },
    { color: 'red', text: 'Text 3' },
    { color: 'red', text: 'Text 9' },
  ]);

  const handleFileUpload = (event) => {
    const files = event.target.files;
    if (files) {
      const uploadedFiles = Array.from(files).map(file => ({
        name: file.name,
        size: file.size,
        type: file.type,
        lastModifiedDate: file.lastModifiedDate.toLocaleDateString(),
      }));

      setDocuments(prevDocuments => [...prevDocuments, ...uploadedFiles]);
    }
  };

  const handleDocumentSelection = (event) => {
    setSelectedDocument(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">Legal Pythia</header>
  
      <div className="upper-content">
        <div className="documents-section">
          <h2>Documents</h2>
          <input 
            type="file" 
            onChange={handleFileUpload} 
            multiple
            accept=".csv,.pdf,.docx"
          />
          <span>csv, pdf, docx ...</span>
          <ul>
            {documents.map((document, index) => (
              <li key={index}>
                {document.name} - Last modified: {document.lastModifiedDate}
              </li>
            ))}
          </ul>
        </div>
  
        <div className="risk-section">
          <h2>Risk</h2>
          {risks.map((risk, index) => (
            <div key={index} className="risk-item">
              <div className="risk-indicator" style={{ backgroundColor: risk.color }}></div>
              <span>{risk.text}</span>
            </div>
          ))}
        </div>
      </div>
  
      <div className="word-summary-section">
        <h2>Word Summary</h2>
        <select value={selectedDocument} onChange={handleDocumentSelection}>
          <option value="">Select a document</option>
          {documents.map((document, index) => (
            <option key={index} value={document.name}>
              {document.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default App;
