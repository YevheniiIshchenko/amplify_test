import React, {Component} from 'react'

import { Auth } from 'aws-amplify';
import { Redirect } from 'react-router';

const styles = {
    input: {
        margin: 10,
        height: 20,
        'fontSize': 15,
      },
    div: {
        height: 250,
        margin: 'auto',
        width: '15%',
    },
    button: {
        'marginLeft': 55,
        width: 'auto',
        height: 25,
        'fontSize': 15,
    }
  }
  
  class SignUp extends Component
  {
    state = { password:'', username:'', authenticationCode: '', step: 0, response: ''};
    onChange = e => {
      this.setState( { [e.target.name]: e.target.value } )  
    }
    signUp = async () => {
      const { password, username } = this.state;
      try {
        await Auth.signUp({  username, password });
        // const signUpData = {
        //     'username': username,
        //     'password': password
        // };
        // const request = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json;charset=utf-8'
        //     },
        //     body: JSON.stringify(signUpData)
        // };
        // this.state.response = await fetch('https://jgv0bknpeb.execute-api.us-east-1.amazonaws.com/dev/signin', request);
        this.setState({step: 1});
        console.log('Success,', 'step = ', this.state.step);
      }
      catch (err) {
        console.log('Error while signing up:', err.message);
      }
    }
    confirmSignUp = async () => {
      const { username, authenticationCode } = this.state;
      try {
        await Auth.confirmSignUp( username, authenticationCode );
        this.setState({step: 2});
        console.log('Successfuly signed up');
      }
      catch (err) {
        console.log('Error while confirming sign up:', err.message);
      }
    }

    render() {
      return (
        <div className='SignUp' style={styles.div}>
          {
            this.state.step === 0 && (
              <div>                
                <input onChange={this.onChange} placeholder='Email' name='username' style={styles.input}></input>
                <input onChange={this.onChange} placeholder='Password' type='password' name='password' style={styles.input}></input>
                <button onClick={this.signUp} name='signUp' style={styles.button}>Sign Up</button>
                <h1>{this.state.response}</h1>
              </div>
            )
          }
          {
            this.state.step === 1 && (
              <div>
                <input onChange={this.onChange} placeholder='Email' name='username' value={this.state.username} vlaue={this.state.username} style={styles.input}></input>
                <input onChange={this.onChange} placeholder='Password' type='password' name='password' value={this.state.password} style={styles.input}></input>
                <p>Check your email for invitation link</p>
              </div>
            )
          }
          {
            this.state.step === 2 && (
              <div>
                <Redirect to="/signin"></Redirect>
              </div>
            )
          }        
        </div>
      );
    }
  }
  
  export default SignUp;