import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image } from 'react-native';
import { NavigationActions, StackActions } from "react-navigation";
import Icon from "../images/images";
import { connect } from 'react-redux'
import { getUserToken, saveUserToken } from '../redux/action';

class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this)
    state = {
      username: '',
      password: '',
    }
  }

  static navigationOptions = {
    title: 'Login'
  }

  login = async () => {
    console.log('In login')
    if (this.state.email != '' && this.state.password != '') {
      fetch('https://sso.genius.estiam.com/apiLogin', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
      }).then(res => {
        return res.json()
      }).then(data => {
        //console.log(data)
        if (data.sToken) {
          console.log("if sToken: ", data )
          this.props.setUser(data)
          console.log("getuser: " + this.props.getUser())
          this.props.navigation.navigate('Home')
          //this.hideBackButton()
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }

  hideBackButton = () => {
    this.props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Home' }),
          NavigationActions.navigate({ routeName: 'Grades' })
        ]
      })
    )

    console.log("getUser Login: " + JSON.stringify(this.props.user))
  }

  componentWillMount() {
      this.props.getUser().then(data => {
        let token = JSON.parse(this.props.user.token.token)
        console.log("component", token.sToken)
        
      })
      
  }

  render() {
    return (

      <View style={styles.container}>
        <Image
          style={{ width: 200, height: 50 }}
          source={Icon.logo} />
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={Icon.emailIcon} />
          <TextInput style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            id="username"
            onChangeText={(username) => this.setState({ username })} />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={Icon.keyIcon} />
          <TextInput style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            id="password"
            onChangeText={(password) => this.setState({ password })} />
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.login}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { user: state }
}

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUserToken()),
  setUser: user => dispatch(saveUserToken(user))
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)