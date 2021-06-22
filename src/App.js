import CounterLeft from './components/Counters/CounterLeft/CounterLeft';
import CounterRight from './components/Counters/CounterRight/CounterRight';
import './App.css';
import Header from './components/Header/Header';



function App() {
  return (
    <div className="App">
      <h2 data-testid='title' className='App-title'>My Counter</h2>
      <Header />
      <CounterRight />
      <CounterLeft />
    </div>
  );
}

export default App;
