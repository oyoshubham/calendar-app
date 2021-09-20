import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  weekName: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 4,
  },
  date: {},
  daysGrid: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 8,
    borderRadius: 1,
    borderColor: 'gray',
    borderWidth: 0.5,
  },
  headerContainer: {
    marginVertical: 16,
  },
  today: {
    borderColor: 'black',
    backgroundColor: 'paleturquoise',
  },
  selectedDate: {
    borderColor: 'black',
    backgroundColor: 'pink',
  },
  otherMonthDays: {
    opacity: 0.3,
  },
  textWeek: {
    fontWeight: '500',
  },
  goToDateContainer: {
    marginVertical: 16,
  },
});
export default styles;
