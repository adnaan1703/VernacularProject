import React, { Component } from 'react';

export default class MainComponent2 extends Component {
  render() {
    return <View style={styles.container}>{this.getText(100)}</View>;
  }

  getText(count) {
    const start = new Date().getTime();
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push(this.getI18nItem('' + i));
    }
    const end = new Date().getTime();
    Alert.alert('Performance - i18n', `time taken: ${end - start} milliseconds`);
    return arr[0];
  }

  
  getI18nItem = item => <Text key={item}>Hello {item}</Text>;
}
