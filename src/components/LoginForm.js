import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' };

  onButtonPress() {
    const { email, password } = this.state;
    
    firebase.auth().signInWithEmailAndPassword(email, password);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            onChangeText={email => this.setState({ email })}
            placeholder="user@gmail.com"
            type="text"
            value={this.state.email}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            onChangeText={password => this.setState({ password })}
            placeholder="password"
            secureTextEntry
            value={this.state.password}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
