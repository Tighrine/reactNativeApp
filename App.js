import React from 'react';
import store from './redux/store';
import { Root } from 'native-base';
import { Provider } from "react-redux";
import AppNavigator from './navigation/AppStackNavigator';

class App extends React.Component {

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

export default App
