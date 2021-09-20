import React, {useState, useRef} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';

const GoToDate = ({searchDate}) => {
  const [value, setValue] = useState('');
  const prevRef = useRef(0);

  const onChangeText = text => {
    if (text.length > 10) return;
    if (text.length == '2' && prevRef.current < 2) {
      text += '/';
    }
    if (text.length == '5' && prevRef.current < 5) {
      text += '/';
    }
    prevRef.current = text.length - 1;
    setValue(text);
  };

  const onSearchPress = () => {
    searchDate(value);
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleText}>Go to date: </Text>
      <TextInput
        style={styles.input}
        onChangeText={text => onChangeText(text)}
        value={value}
        placeholder="dd/mm/yyyy"
        keyboardType="numeric"
      />
      <TouchableOpacity onPress={onSearchPress} style={styles.searchButton}>
        <Text style={styles.searchButtonText}>{'Search'}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default GoToDate;
