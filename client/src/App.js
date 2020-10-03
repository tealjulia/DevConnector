import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import store from './store';
import {Provider} from 'react-redux';

class App extends Component {
  render() {
    return(
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />

          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          
          <Footer />
        </div>
      </Router>
    </Provider>
    )
  };
}

export default App;
