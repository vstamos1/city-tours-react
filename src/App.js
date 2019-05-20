import React, {Component} from 'react';
import './App.scss';
import Navbar from './component/Navbar/Navbar';
import TourList from './component/TourList/index';
class App extends Component {
  render() {
    return (
      <>
      <Navbar></Navbar>
      <TourList></TourList>
      </>
    );
  }
  
}

export default App;
