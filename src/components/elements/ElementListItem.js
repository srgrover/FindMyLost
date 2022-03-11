import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-ionicons';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#fea345',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  icon: {
    marginLeft: 'auto',
    padding: 10,
  },
});

export default function ElementListItem({element, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={{uri: element.photo}} style={styles.image} />
        <Text>{element.desc}</Text>
        <Icon name="add" style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
}
