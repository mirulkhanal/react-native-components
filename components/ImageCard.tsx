import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ImageCard() {
  return (
    <View>
      <Text style={styles.headingText}>Image Card</Text>
      <View
        style={{
          ...styles.container,
        }}>
        <Image
          style={{borderTopLeftRadius: 8, borderTopRightRadius: 8}}
          source={{
            uri: 'https://i.ibb.co/WVGVx6s/durbar.jpg',
            height: 231,
          }}
        />
        <View style={styles.detailsContainer}>
          <Text style={{color: 'black', ...styles.detailsTitle}}>
            Kathmandu Durbar Square
          </Text>
          <Text style={{color: '#45475a', ...styles.detailsLocation}}>
            Kathmandu, Nepal.
          </Text>
          <Text style={{color: 'black', ...styles.detailsContent}}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni,
            cumque ducimus vero incidunt quam laudantium quidem? Aliquid eos
            laboriosam doloremque!
          </Text>
          <Text style={{alignSelf: 'flex-end'}}>12 mins away.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: '900',
    marginHorizontal: 14,
    color: 'white',
  },
  container: {
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  detailsContainer: {
    display: 'flex',
    paddingHorizontal: 10,
    gap: 10,
    paddingVertical: 10,
    backgroundColor: '#F8C0C8',
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: '900',
  },
  detailsContent: {
    fontSize: 16,
  },
  detailsLocation: {
    fontSize: 16,
    fontWeight: 700,
  },
});
