import React from 'react';
import {SafeAreaView, Text, View, ScrollView, FlatList} from 'react-native';
import CalendarBody from './CalendarBody';
import TitleBar from '../components/TitleBar';
const MyApp = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={new Array(1)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={() => {
          return (
            <View>
              <TitleBar />
              <CalendarBody />
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
export default MyApp;
