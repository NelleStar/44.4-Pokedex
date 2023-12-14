// import logo from './logo.svg';
import './App.css';
import pokemon from './Pokemon';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <Pokedex pokemon={pokemon}/>
    </div>
  );
}

export default App;
