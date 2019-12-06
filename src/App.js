import React, { Component } from 'react';
import './app.css'

import { firebaseDB } from './Server';
import { scroller } from 'react-scroll'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


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
  authenticate = () => {
    console.log('222')
    const pass = prompt('ENTER PASSWORD')
    if (pass === this.state.password) {
        document.querySelector('.jobs').classList.add('show')
        scroller.scrollTo('jobs', {
            duration: 1000,
            delay: 0,
            smooth: true
        })
    } else {
      alert('wrong password')
    }
  }

  
  render() {
    
    return (
      <div className="App">
        <Header/>
        <Footer/>
      </div>
    );
  }
}

export default App;
