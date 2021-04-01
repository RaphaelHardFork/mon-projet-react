import "bootstrap/dist/css/bootstrap.css"
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Et ensuite ?
        </p>
        <p>{counter}</p>
        <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>Cliquez sur moué</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main><p>
        Edit <code>src/App.js</code> and save to reload.
          Et ensuite ?
        </p>
        <p>{counter}</p>
        <button className="bouton" onClick={() => setCounter(counter + 1)}>Cliquez sur moué</button>
      </main>
    </div>
  );
}

export default App;
