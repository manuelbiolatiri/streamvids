import React, { Component } from 'react';
import ReactGA from 'react-ga';
// import Games from "./containers/Games/Games";
import SideBar from './containers/UI/SideBar/SideBar';
// import NavBar from './containers/UI/NavBar/NavBar';
import Home from './components/Home/Home';
import NavBar from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer.js';
// import Slider from './containers/Slider/Slider.js';
import UploadVideo from './components/UploadVideo.js';
import './App.css'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
ReactGA.initialize('UA-147154395-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {

  render() {
    return (
      <div className="App-wrapper">
        <NavBar />
        
        {/* <SideBar /> */}
        <div className="body">
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/upload-a-video" exact component={UploadVideo} />
            {/* <Route path="/referrals/:refuser" exact component={Referrals} /> */}
            {/* <Route path="/404" component={ErrorPage} />
            <Redirect from="*" to="/404" /> */}
          </Switch>
          {/* <Home /> */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
