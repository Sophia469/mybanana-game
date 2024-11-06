import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getBananaData } from './BananaAPI';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getBananaData();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <h1>Banana Game</h1>
        {data ? (
          <div>
            <p>Question: {data.question}</p>
            <img src={data.question} alt="Banana game" />
            <p>Solution: {data.solution}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </div>
  );
}

export default App;
