import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const data = [
  {
    uid: 1,
    name: 'Alice Johnson',
    bio: 'Passionate about art and design.',
    imageurl: 'https://via.placeholder.com/150',
  },
  {
    uid: 2,
    name: 'Bob Smith',
    bio: 'Loves hiking and outdoor adventures.',
    imageurl: 'https://via.placeholder.com/150',
  },
  {
    uid: 3,
    name: 'Charlie Williams',
    bio: 'Tech enthusiast and software developer.',
    imageurl: 'https://via.placeholder.com/150',
  },
  {
    uid: 4,
    name: 'Dana Lee',
    bio: 'Avid reader and aspiring writer.',
    imageurl: 'https://via.placeholder.com/150',
  },
  {
    uid: 5,
    name: 'Evan Garcia',
    bio: 'Fitness coach and nutrition expert.',
    imageurl: 'https://via.placeholder.com/150',
  },
];

const ContactList = () => {
  return (
    <View>
      <Text>ContactList</Text>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({});
