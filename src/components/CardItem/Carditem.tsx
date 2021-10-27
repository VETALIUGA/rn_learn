import React from 'react';
import {Image, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';

const CardItem = ({text, image, price}) => {
  return (
    <TouchableOpacity
      onPress={() => Alert.alert('You chose', text)}
      style={styles.btn}>
      <Image style={styles.image} source={{uri: image}} />
      <Text>{text}</Text>
      <Text>{price} UAH</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 180,
    borderRadius: 4,
    marginTop: 16,
  },
  btn: {
    width: '50%',
  },
});

export default CardItem;
