import React, {Component} from 'react'

import { Auth } from 'aws-amplify';

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

class SignIn extends Component
{
    state = {username: '', password: ''};
    onChange = e => {
        this.setState( { [e.target.name]: e.target.value } )  
    }

    signIn = async () => {
        const {username, password} = this.state;
        try {
            await Auth.signIn(username, password)
            .then((data) => console.log(data));            
        }
        catch(err){
            console.log(err.message);
        }
    }

    render() {
        return (
        <div className='SignIn' style={styles.div}>
            <div>
                <input onChange={this.onChange} placeholder='Email' name='username' style={styles.input}></input>
                <input onChange={this.onChange} placeholder='Password' type='password' name='password' style={styles.input}></input>
                <button onClick={this.signIn} name='signIn' style={styles.button}>Sign In</button>
            </div>
        </div>
        );
    }
}

export default SignIn;