import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './containers/Navbar';
import ProduitsList from './containers/ProduitsList';
import Details from './containers/Details';
import Cart from './containers/Cart';
import Default from './containers/Default';
import Modal from './containers/Modal';

class App extends React.Component {
  render() {
    return (

      <React.Fragment>
        <Navbar />
        <Switch>

          <Route exact path="/" component={ProduitsList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>


    );

  }
}


export default App;
