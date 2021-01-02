import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Footer from './components/layout/Footer';
import Lyrics from './components/tracks/Lyrics';
import {Provider} from './context';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/lyrics/track/:id" component={Lyrics} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;