import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const TitleBar = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleText}>Calendar App</Text>
    </View>
  );
};
export default TitleBar;
