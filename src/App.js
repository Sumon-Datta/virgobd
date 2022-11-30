

import { Button, Form } from 'react-bootstrap';

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Account from './components/account/Account';
import Home from './components/Home/Home';
import Menu from './components/Home/Menu/Menu';
import NotFound from './components/notFound/NotFound';
import Profile from './components/Profile/Profile';
import WishList from './components/Profile/WishList';
import Shop from './components/Shop/Shop';


function App() {
  return (
    <div className="App">
        {/* <Menu></Menu> */}
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="home" element={ <Home/> } />
        <Route path="shop" element={ <Shop/> } />
        <Route path="account" element={ <Account/> } />
        <Route path="profile" element={ <Profile/> } />
        <Route path="wishlist" element={ <WishList/> } />
        <Route path="*" element={ <NotFound/> } />
    </Routes>
     
    </div>
  );
}

export default App;
