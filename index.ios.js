/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  WebView
} from 'react-native';

export default class standup_native_webview extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'http://inoddedoff.net:9000'}}
        style={{marginTop: 20}}
        />
    );
  }
}

AppRegistry.registerComponent('standup_native_webview', () => standup_native_webview);
