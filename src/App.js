import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

/*
// antes no default de criação essa função era definida como uma classe
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

// Esse formato era o usado anteriormente
// Antes do surgimento dos Hooks essa era uma das maneiras a forçar um componente a atualizar
// Uma outra forma de renderizar era quando as propriedades eram alteradas
class App2 extends React.Component {
  contador = 1
  state = {
    contador: 1
  }
  increment = () => {
    this.setState({ contador: this.state.contador + 1 })
  }
  render() {
    return (
      <h1>Contador (app2): {this.state.contador}
      <button onClick={this.increment}>Increment</button>
      </h1>
    )
  }
}

// O atual é menos verboso
const App1 = () => {
  const [contador, setContador] = useState(1)
  const increment = () => {
    setContador(contador + 1)
  }
  return (
    <h1>Contador (app1): {contador}
    <button onClick={increment}>Increment</button>
    </h1>
  )
}

function App() {
  return (
    <div className="App">
      <App1 />
      <App2 />
    </div>
  )
}
export default App;
