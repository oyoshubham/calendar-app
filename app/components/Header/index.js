import React from 'react';
import {View, SafeAreaView, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native';
import styles from './styles';

const Header = ({
  month,
  year,
  onLeftButtonPress,
  onRightButtonPress,
  onPlusButtonPress,
  onMinusButtonPress,
}) => {
  // const month = 'January';
  // const year = '2018';

  const onLeftIconPress = () => {
    // alert('left');
    onLeftButtonPress();
  };
  const onRightIconPress = () => {
    onRightButtonPress();
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={onLeftIconPress}>
        <Image
          style={{height: 36, width: 36}}
          source={require('../../images/chevron_left.png')}
        />
      </TouchableOpacity>

      <View style={styles.textMonthYear}>
        <Text style={styles.textMonth}>{month}</Text>
        <Text style={styles.textYear}>{year}</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={onMinusButtonPress}>
            <Image
              style={{height: 30, width: 30}}
              source={require('../../images/minus.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPlusButtonPress}>
            <Image
              style={{height: 30, width: 30}}
              source={require('../../images/plus.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={onRightIconPress}>
        <Image
          style={{height: 36, width: 36}}
          source={require('../../images/chevron_right.png')}
        />
      </TouchableOpacity>
    </View>
  );
};
export default Header;
