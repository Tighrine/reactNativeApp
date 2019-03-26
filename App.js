import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import store from './redux/store';
import { Root } from 'native-base';
import { Provider } from "react-redux";
import AppNavigator from './navigation/AppStackNavigator';

export default class App extends React.Component {

  

  render() {
    return (
      <Provider store={store}>
        <Root>
          <AppNavigator />
        </Root>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
