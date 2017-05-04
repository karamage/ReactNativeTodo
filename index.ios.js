/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import TodoListContainer from './src/TodoListContainer';

class ReactNativeSample extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TodoListContainer />
    );
  }
}

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample);
