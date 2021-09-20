import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  input: {
    // height: 30,
    width: 100,
    margin: 12,
    borderWidth: 1,
    padding: 8,
  },
  searchButton: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: 'black',
  },
  searchButtonText: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    color: 'white',
  },
  titleText: {
    fontSize: 20,
  },
});
export default styles;
