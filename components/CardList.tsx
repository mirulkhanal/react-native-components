import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function CardList() {
  const cardData = [
    {
      text: 'Green',
      color: '#a6e3a1',
    },
    {
      text: 'Red',
      color: '#f38ba8',
    },
    {
      text: 'Purple',
      color: '#cba6f7',
    },
  ];

  return (
    <View style={styles.parent}>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        {cardData &&
          cardData.map(card => (
            <View
              key={card.color}
              style={{
                backgroundColor: `${card.color}`,
                ...styles.card,
              }}>
              <Text style={{color: 'white'}}>{card.text}</Text>
            </View>
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: '900',
    marginHorizontal: 14,
    marginVertical: 2,
    color: 'white',
  },
  parent: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  card: {
    width: 120,
    height: 120,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
});
