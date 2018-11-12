import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import { I18nProvider } from '@lingui/react';
import { Trans } from '@lingui/macro';
import { i18nEn, i18nEs, i18nFr } from './setup';

export default class MainComponent extends Component {
  render() {
    return (
      <I18nProvider i18n={i18nEn} language="en">
        <View style={styles.container}>{this.getText(100, true)}</View>
      </I18nProvider>
    );
  }

  getText(count, localise) {
    const start = new Date().getTime();
    const arr = [];
    for (let i = 0; i < count; i++) {
      if (localise) arr.push(this.getI18nItem('' + i));
      else arr.push(this.getItem('' + i));
    }
    const end = new Date().getTime();
    Alert.alert('Performance - i18n', `time taken: ${end - start} milliseconds`);
    return arr[0];
  }

  getI18nItem = item => (
    <Text key={item}>
      <Trans>Hello {item}</Trans>
    </Text>
  );

  getItem = item => <Text key={item}>Hello world from the main component</Text>;

  keyExtractor = (item, index) => item;

  getList(count) {
    const start = new Date().getTime();
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push('' + i);
    }

    const flatList = (
      <FlatList
        data={arr}
        keyExtractor={this.keyExtractor}
        renderItem={({ item }) => this.getItem(item)}
      />
    );
    const end = new Date().getTime();
    Alert.alert('Performance - Native', `time taken: ${end - start} milliseconds`);
    return flatList;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
