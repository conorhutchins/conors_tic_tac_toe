import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

type Props = {
  value: 'X' | 'O' | null; // The value of the square can be 'X', 'O', or null
  onPress: () => void; // This function will be called when the square is pressed
};

export const Square: React.FC<Props> = ({value, onPress}) => {
  return (
    <TouchableOpacity style={styles.square} onPress={onPress}>
      <Text style={styles.text}>{value ? value : ' '}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    borderWidth: 3.5,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});
