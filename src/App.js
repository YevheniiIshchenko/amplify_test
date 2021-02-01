import React, {Component} from 'react'
import './App.css';

import { Redirect } from 'react-router';

const styles = {
}

class App extends Component
{
  signUpRedirect() {
    return <Redirect to="/signup"></Redirect>
  }
  render() {
    return (
      <div className='App' style={styles.div}>
        {
          // <a onClick={this.signUpRedirect}>Sign Up</a>
          <a href="/signup"><h1>Sign Up</h1></a>
        }
      </div>
    );
  }
}

export default App;
