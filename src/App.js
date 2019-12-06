import React, { Component } from 'react';
import './app.css'

import { firebaseDB } from './Server';
import { scroller } from 'react-scroll'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandPage from './components/landingPage/LandPage';


class App extends Component {
  state = {
      clients: [],
      password: 'timi0717'
  }
  async componentDidMount(){
    const clients = []
    await firebaseDB.ref('clients').once('value').then((snapshot)=>{
      snapshot.forEach(e=>{
        clients.push(e.val())
      })
      
    })
    this.setState({clients: clients})

  }
  
  render() {
    
    return (
      <div className="App">
        <Header/>
        <LandPage/>
        <Footer/>
      </div>
    );
  }
}

export default App;
