import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import CardList from './components/CardList';
import ScrollableCardList from './components/ScrollableCardList';
import ImageCard from './components/ImageCard';
import BlogCard from './components/BlogCard';

const App = () => {
  return (
    <SafeAreaView style={styles.parent}>
      <ScrollView>
        <CardList />
        <ScrollableCardList />
        <ImageCard />
        <BlogCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#3b4252',
  },
});
