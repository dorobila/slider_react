import React, {
  Component
} from 'react';
import './Reset.css';
import './App.css';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Gallery from './Components/Gallery';
import Content from './Components/Content';
import Footer from './Components/Footer';


class App extends Component {
  render() {
    return ( <
      div className = "App" >
      <
      Nav / >
      <
      Header / >
      <
      Gallery / >
      <
      Content / >
      <
      Content / >
      <
      Content / >
      <
      Footer / >
      <
      /div>
    );
  }
}

export default App;