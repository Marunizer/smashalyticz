import React, { Component } from 'react';
// import Challenges from './components/functional/Challenges'
// import AddChallenge from './components/class/AddChallenge'
import Navbar from './components/Navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import Post from './components/Post'

class App extends Component {

  //Tutorial stuff I had done, no longer relavent but keeping cause I wanna review it when I have time
  // state = {
  //   challenges: [
  //       {id:1, content: 'Get a 30 hit or higher combo in training mode'},
  //       {id:2, content: 'Get a 50 hit or higher combo in training mode'}
  //   ]
  // }
  // deleteChallenge = (id) => {
  //   console.log(id);
  //   let challenges = this.state.challenges.filter(challenge => {
  //     return challenge.id !== id //if id doesnt match do nothing, if id is the same, filter it out 
  //   }); //non-destructive, doesnt alter array directly, returns a copy
  //   this.setState({
  //     challenges : challenges
  //   })
  // }
  // addChallenge = (challenge) => {
  //   console.log(challenge)
  //   challenge.id = Math.random();
  //                   //spread todo will go through eahc array item
  //   let challenges = [...this.state.challenges, challenge]
  //   this.setState({
  //     challenges: challenges
  //   })
  //   //
  //   {/* <div className="challenges-app container">
  //           <h1 className="center blue-text">Challenges</h1>
  //           <Challenges challenges={this.state.challenges} deleteChallenge={this.deleteChallenge}/>
  //           <AddChallenge addChallenge={this.addChallenge}/>
  //         </div> */}
  // }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
