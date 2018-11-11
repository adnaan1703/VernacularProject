import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { I18nProvider } from '@lingui/react';
import { Trans } from '@lingui/macro';
import { i18nEn, i18nEs, i18nFr } from './setup';


export default class MainComponent extends Component {
  render() {
    return (
      <I18nProvider i18n={i18nFr} language="fr">
        <View style={styles.container}>
          <Text><Trans>Hello World this is the main component!</Trans></Text>
        </View>
      </I18nProvider>
    );
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
