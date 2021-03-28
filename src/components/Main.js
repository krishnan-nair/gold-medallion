import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './Homepage'
import UserProfile from './UserProfile'
import Query from './Query'
import LoginSignUp from './LoginSignUp'
import AddUserRide from './AddUserRide'
import SignUpRedirect from './SignUpRedirect'

class Main extends Component {
  render() {
    return (
      <div className="main-panel">
        <Navbar />
          <Switch>
            <Route path="/homepage" component={HomePage} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/query" component={Query} />
            <Route path="/loginsignup" component={LoginSignUp} />
            <Route path="/AddUserRide" component={AddUserRide} />
            <Route path="/signUpRedirect" component={SignUpRedirect} />
            <Redirect from='*' to='/homepage' />
          </Switch>
        <Footer />
      </div>
    )
  }
}

export default Main