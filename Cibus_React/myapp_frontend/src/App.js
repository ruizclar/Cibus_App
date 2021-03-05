//All app imports
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import brandlogo from './Cibus_Logo.png';

//Importing pages and Navbar
import NavBar from './NavBar';
import HomePage from './pages/home';
import RegisterPage from './pages/RegisterPage';
import AccountPage from './pages/AccountPage';
import RecipePage from './pages/RecipePage';
import MenuPage from './pages/MenuPage';
import MarketPage from './pages/MarketPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

//Importing Images


function App(){
  return (
    <Router>
      <div className="App">
       
        <NavBar fixed="top" />
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route path="/register" component={RegisterPage}/>
          <Route path="/account" component={AccountPage}/>
          <Route path="/recipe" component={RecipePage}/>
          <Route path="/menu-plan" component={MenuPage}/>
          <Route path="/market-ingredient" component={MarketPage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


