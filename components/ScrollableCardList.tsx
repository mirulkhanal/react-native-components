import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ScrollableCardList() {
  const cardData = [
    {
      text: 'Card 1',
    },
    {
      text: 'Card 2',
    },
    {
      text: 'Card 3',
    },
    {
      text: 'Card 4',
    },
    {
      text: 'Card 5',
    },
    {
      text: 'Card 6',
    },
  ];
  return (
    <View style={styles.parent}>
      <Text style={styles.headingText}>Scrollable Cards</Text>
      <ScrollView horizontal contentContainerStyle={styles.container}>
        {cardData.map(card => (
          <View key={card.text} style={styles.card}>
            <Text style={{color: '#11111b', fontSize: 20, fontWeight: '900'}}>
              {card.text}
            </Text>
          </View>
        ))}
      </ScrollView>
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
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
  },
  card: {
    width: 120,
    height: 120,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginHorizontal: 5,
    backgroundColor: '#F2EFC7',
  },
});
