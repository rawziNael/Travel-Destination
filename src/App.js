import './App.css';
import Home from './Components/Home'
import data from './data.json'


function App() {
  return (
    <div className="App">
      <Home data={data}/>
    </div>
  );
}

export default App;
