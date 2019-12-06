import React, { Component } from 'react';
import './app.css'

import { firebaseDB } from './Server';

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


  renderUser = (e) => {
    e.preventDefault()
    const regDetails = {
      name: document.querySelector('.name').value,
      email: document.querySelector('.mail').value,
      username: document.querySelector('.username').value,
      phone: document.querySelector('.phone').value,
      date: document.querySelector('.date').value,
      password: document.querySelector('.password').value,
      friends: [
        {
          name: 'Saade Michel',
          department: 'computer science',
          messages: [
            {
              sender: 'ashraf',
              message: 'this is a test message'
            },
            {
              sender: 'temi',
              message: 'from me'
            }
          ],
          status: [
            {
              type: 'video, image, text',
              status: 'https://kjetu578thqb57thq5on5q78h5iuhq587h45m4q85hm45hm'
            },
            {
              type: 'video, image, text',
              status: 'https://kjetu578thqb57thq5on5q78h5iuhq587h45m4q85hm45hm'
            },
            {
              type: 'video, image, text',
              status: 'https://kjetu578thqb57thq5on5q78h5iuhq587h45m4q85hm45hm'
            },
            {
              type: 'video, image, text',
              status: 'https://kjetu578thqb57thq5on5q78h5iuhq587h45m4q85hm45hm'
            }
          ]
        },
        {
          name: 'Samuel Daniel',
          department: 'Arts',
          messages: [
            {
              sender: 'ashraf',
              message: 'yoyoyoyoyoyoyooyoy'
            },
            {
              sender: 'temi',
              message: 'enjoying that'
            }
          ],
          status: [
            {
              type: 'video, image, text',
              status: 'https://kjetu578thqb57thq5on5q78h5iuhq587h45m4q85hm45hm'
            },
            {
              type: 'video, image, text',
              status: 'https://kjetu578thqb57thq5on5q78h5iuhq587h45m4q85hm45hm'
            },
            {
              type: 'video, image, text',
              status: 'https://kjetu578thqb57thq5on5q78h5iuhq587h45m4q85hm45hm'
            },
            {
              type: 'video, image, text',
              status: 'https://kjetu578thqb57thq5on5q78h5iuhq587h45m4q85hm45hm'
            }
          ]
        },{
          name: 'Olabiyi Daniel',
          department: 'Microbiology',
          messages: [
            {
              sender: 'ashraf',
              message: 'HI man'
            },
            {
              sender: 'temi',
              message: 'Hello there'
            }
          ],
          status: [
            {
              type: 'video, image, text',
              status: 'https://kjetu578thqb57thq5on5q78h5iuhq587h45m4q85hm45hm'
            },
            {
              type: 'video, image, text',
              status: 'https://kjetu578thqb57thq5on5q78h5iuhq587h45m4q85hm45hm'
            },
            {
              type: 'video, image, text',
              status: 'https://kjetu578thqb57thq5on5q78h5iuhq587h45m4q85hm45hm'
            },
            {
              type: 'video, image, text',
              status: 'https://kjetu578thqb57thq5on5q78h5iuhq587h45m4q85hm45hm'
            }
          ]
        },{
          name: 'Remi Olaiwola',
          department: 'Geography',
          messages: [
            {
              sender: 'ashraf',
              message: 'where is the map'
            },
            {
              sender: 'temi',
              message: 'go check the satellite'
            }
          ],
          status: [
            {
              type: 'video, image, text',
              status: 'https://kjetu578thqb57thq5on5q78h5iuhq587h45m4q85hm45hm'
            },
            {
              type: 'video, image, text',
              status: 'https://kjetu578thqb57thq5on5q78h5iuhq587h45m4q85hm45hm'
            },
            {
              type: 'video, image, text',
              status: 'https://kjetu578thqb57thq5on5q78h5iuhq587h45m4q85hm45hm'
            },
            {
              type: 'video, image, text',
              status: 'https://kjetu578thqb57thq5on5q78h5iuhq587h45m4q85hm45hm'
            }
          ]
        }
      ],
      followers: 0,
      following: 0,
    }
    this.setState({user: regDetails})
    this.setState({route: 'home'})
  }
  
  render() {
    
    return (
      <div className="App">
        <Header/>
        {this.state.route === 'landing'? 
          <LandPage renderUser={this.renderUser}/>:
          this.state.route === 'home'?
            <Home user={this.state.user}/>:
            null
          
        }
        <Footer/>
      </div>
    );
  }
}

export default App;
