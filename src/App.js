import React, { Component } from 'react';
import './app.css'

import { firebaseDB } from './Server';
// import { regDetails } from './components/DomEls'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandPage from './components/landingPage/LandPage';
import Home from './components/HomePage/Home';


class App extends Component {
  state = {
      users: [],
      user: {},
      route: 'landing'
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

  renderUser = (e) => {
    e.preventDefault()
    const regDetails = {
      name: document.querySelector('.name').value,
      email: document.querySelector('.mail').value,
      username: document.querySelector('.username').value,
      phone: document.querySelector('.phone').value,
      date: document.querySelector('.date').value,
      password: document.querySelector('.password').value,
    }
    this.setState({user: regDetails})
    console.log(this.state.user)
    this.setState({route: 'home'})
  }
  
  render() {
    
    return (
      <div className="App">
        <Header/>
        {this.state.route === 'landing'? 
          <LandPage renderUser={this.renderUser}/>:
          this.state.route === 'home'?
            <Home/>:
            null
          
        }
        <Footer/>
      </div>
    );
  }
}

export default App;
