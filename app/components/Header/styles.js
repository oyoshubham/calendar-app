import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textMonthYear: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textMonth: {
    marginRight: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
  textYear: {
    marginRight: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default styles;
