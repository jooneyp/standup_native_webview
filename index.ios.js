/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  WebView,
  View,
  AppState
} from 'react-native';
// import PushController from './PushController';
import PushNotification from 'react-native-push-notification';

export default class standup_native_webview extends Component {
  constructor(props) {
    super(props);

    this.handleAppStateChange = this.handleAppStateChange.bind(this);
    // this.state = {
    //   seconds: 5,
    // };
  }

  componentDidMount() {
    // AppState.addEventListener('change', this.handleAppStateChange);
    PushNotification.configure({
      onNotification: function(notification) {
        console.log( 'NOTIFICATION:', notification );
      },
    });
  }

  componentWillUnmount() {
    // AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange(appState) {
    // if (appState === 'background') {
    //   PushNotification.localNotificationSchedule({
    //     message: "My first notification",
    //     date: new Date(Date.now() + (this.state.seconds * 1000)),
    //   });
    // }
  }
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
