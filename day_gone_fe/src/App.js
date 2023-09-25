import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route path="/" Component={Home}/>
    </div>
  );
}

export default App;
