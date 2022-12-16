
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router';
import Grid from './Components/Grid';

function App() {
  return (
    <div className="App">
     <Navbar/>
      
      <Routes>
        <Route path="/" element={<Grid />}></Route>
      </Routes>
    </div>
  );
}

export default App;
