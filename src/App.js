
import { Button, Form } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';


function App() {
  return (
    <div className="App">
     

    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="home" element={ <Home/> } />
        <Route path="shop" element={ <Shop/> } />
    </Routes>
     
    </div>
  );
}

export default App;
