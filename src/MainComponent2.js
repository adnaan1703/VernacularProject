import React, { Component } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import IntlSetup from './IntlSetup';

export default class MainComponent2 extends Component {
  render() {
    IntlSetup.setup();
    return (
      <IntlProvider locale="en" messages={{ 'main.hello': 'Hello World' }}>
        <View style={styles.container}>{this.getText(100)}</View>;
      </IntlProvider>
    );
  }

  getText(count) {
    const start = new Date().getTime();
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push(this.getI18nItem('' + i));
    }
    const end = new Date().getTime();
    Alert.alert(
      'Performance - i18n',
      `time taken: ${end - start} milliseconds`
    );
    return arr[0];
  }

  getI18nItem = item => (
    <Text key={item}>
      <FormattedMessage
        id="main.hello"
        defaultMessage="Hello world from the main component 2"
      />
    </Text>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });
  
