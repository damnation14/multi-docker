import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch("/api/hello")       
      .then(res => res.text())
      .then(setMessage)
      .catch(err => setMessage("Failed to fetch"));
  }, []);

  return (
    <div className="App">
      <h1>React + Go Fullstack App</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
