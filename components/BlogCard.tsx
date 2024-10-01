import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
const BlogCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={styles.container}>
        <Text style={styles.blogTitle}>
          Linear Algebra for Deep Neural Networks
        </Text>
        <Image
          source={{uri: 'https://i.ibb.co/S7zMSQy/neural.jpg'}}
          style={styles.image}
        />
        <View>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea hic sed
            sapiente corrupti qui officia eligendi quo a, necessitatibus non.
          </Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={{...styles.button, backgroundColor: '#1e66f5'}}>
              <Text style={{color: 'white'}}>Read more</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{...styles.button, backgroundColor: '#e64553'}}>
              <Text style={{color: 'white'}}>Follow Me</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BlogCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#63A375',
    paddingHorizontal: 10,
  },
  headingText: {
    fontSize: 24,
    fontWeight: '900',
    marginHorizontal: 14,
    marginVertical: 5,
    color: 'white',
  },
  blogTitle: {
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: '800',
    color: 'white',
  },
  image: {
    height: 200,
    borderRadius: 8,
  },
  description: {
    marginVertical: 10,
    fontSize: 16,
    color: 'white',
    fontWeight: '300',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 20,
  },
  button: {
    padding: 10,
    borderRadius: 8,
  },
});
