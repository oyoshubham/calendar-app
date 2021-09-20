import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import Header from '../Header';
import GoToDate from '../GoToDate';
import styles from './styles';
import {MONTH_MAP, WEEK_MAP} from '../../constants';
import getMonthDays, {
  checkSameMonth,
  validateDate,
  isDateOfSelectedMonth,
  isSameDay,
  isSameMonth,
  getPreviousMonth,
  getNextMonth,
} from '../../utils';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const CalendarBody = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedDay, setSelectedDay] = useState(0);
  const [days, setDays] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const sixWeekData = getMonthDays(selectedMonth, selectedYear);
    setDays(sixWeekData);
  }, [selectedYear, selectedMonth]);

  const onLeftButtonPress = () => {
    const {month, year} = getPreviousMonth(selectedMonth, selectedYear);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSelectedMonth(month);
    if (year >= 0) setSelectedYear(year);
  };
  const onRightButtonPress = () => {
    const {month, year} = getNextMonth(selectedMonth, selectedYear);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSelectedMonth(month);
    if (year >= 0) setSelectedYear(year);
  };
  const onSearchPress = value => {
    const result = validateDate(value);
    if (result == false) {
      setSelectedDay(0);
      alert('Invalid Date');
    } else {
      const {day, month, year} = result;
      setSelectedMonth(month);
      setSelectedYear(year);
      setSelectedDay(day);
    }
  };
  // console.log(JSON.stringify(days));
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Header
          month={MONTH_MAP[selectedMonth - 1]}
          year={selectedYear}
          onLeftButtonPress={onLeftButtonPress}
          onRightButtonPress={onRightButtonPress}
          onPlusButtonPress={() => setSelectedYear(year => year + 1)}
          onMinusButtonPress={() =>
            setSelectedYear(year => (year > 0 ? year - 1 : year))
          }
        />
      </View>

      <View style={styles.weekName}>
        {WEEK_MAP.map(item => {
          return (
            <View>
              <Text style={styles.textWeek}>{item}</Text>
            </View>
          );
        })}
      </View>

      <View>
        <FlatList
          data={days}
          listKey={(item, index) => JSON.stringify(item)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={item => (
            <View
              style={[
                styles.daysGrid,
                isDateOfSelectedMonth(selectedMonth, selectedDay, item.item) &&
                  styles.selectedDate,
                isSameDay(new Date(), item.item) && styles.today,
              ]}>
              <Text
                style={
                  !checkSameMonth(item.item, selectedMonth) &&
                  styles.otherMonthDays
                }>
                {item.item[2]}
              </Text>
            </View>
          )}
          numColumns={7}
        />
      </View>
      <View style={styles.goToDateContainer}>
        <GoToDate searchDate={onSearchPress} />
      </View>
    </View>
  );
};
export default CalendarBody;
